"""
Extraction Logic Here
"""
from model import GPTLLM
from typing import List, Tuple, Any, Optional
from data_models import HousingListing
import sqlite3
from const import PROMPT_TEMPLATE, SQL_QUERY
from langchain_core.prompts import PromptTemplate
from pydantic import BaseModel
from time import sleep
import json


# Model with Structured Output
class ProcessingModel:

    llm = GPTLLM.get_model_o4_mini()

    @classmethod
    def get_processing_model(cls):
        """Get a processing model configured for structured output.
        
        Returns:
            A language model configured to output HousingListing objects
        """
        return cls.llm.with_structured_output(HousingListing)


# Fetch data from SQLite3
def fetch_data(db_path: str, 
               query: str, 
               params: Optional[Tuple[Any, ...]] = None
              ) -> List[Tuple]:
    """
    Connects to the SQLite3 database at db_path, executes the given query
    (with optional parameters), fetches all results, and closes the connection.
    
    :param db_path: Path to your .db file
    :param query:   SQL query to execute (e.g. 'SELECT * FROM users WHERE id = ?')
    :param params:  Tuple of parameters to bind into the query (default: None)
    :return:        List of rows, each as a tuple of column values
    """
    # Establish connection (will create the file if it doesn't exist)
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Execute with or without parameters
    if params:
        cursor.execute(query, params)
    else:
        cursor.execute(query)

    # Fetch all results
    rows = cursor.fetchall()

    # Clean up
    cursor.close()
    conn.close()

    return rows

# Construt the prompts
def create_prompts(data=list[tuple]):
    prompts = []
    for record in data:
        prompt = PromptTemplate.from_template(PROMPT_TEMPLATE)
        prompts.append(prompt.format(
            listing_id= record[0],
            listing_date=record[1],
            listing_url=record[2],
            listing_phone=record[3],
            street=record[4],
            rooms=record[5],
            area=record[6],
            price=record[7],
            description=record[8]

        ))
    return prompts


def process_data(prompts: List[str], model: ProcessingModel):
    if not prompts:
        raise Exception("Empty Dataset!")
    rent_data = []

    print(f"Processing {len(prompts)} listings !")
    
    for prompt in prompts:
        try: 
            
            _data = model.invoke(prompt)
            rent_data.append(_data)
            sleep(3)

        except Exception as e:
            print(f"An error ocurred while processing data: {e}")

    return rent_data


def save_models_to_json(models: list[BaseModel], path: str) -> None:
    """
    Serializes a list of Pydantic models to a JSON file.
    """
    # 1) Convert each model to a dict
    data = [m.model_dump() for m in models]

    # 2) Write out as JSON
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    

def main():

    # SQL Connection and Data
    path = "../data/properties3.db"
    sql  = SQL_QUERY
    data = fetch_data(path, sql)

    # Processing Model
    model = ProcessingModel.get_processing_model()
    prompts= create_prompts(data)

    rent_data = process_data(prompts, model)

    # Create the Whole file
    save_models_to_json(rent_data, path="processed_descriptions.json")

if __name__ == "__main__":
    # Example usage:
    #path = "../data/properties3.db"
    #sql  = SQL_QUERY
    #data = fetch_data(path, sql)

    #prompts = create_prompts(data)
    #model = ProcessingModel.get_processing_model()

    #rent_data = process_data([prompts[0]], model)

    #save_models_to_json(rent_data, path="sample.json")
    
    main()

