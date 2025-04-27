from sqlalchemy import create_engine, text
from pydantic import BaseModel
from typing import List
from collections import defaultdict
import json

class ImageInsightModel(BaseModel):
    property_id: int
    furnished: str
    washing_machine: str
    refrigerator: str
    stove_type: str
    water_heater_type: str
    heating_type: str
    overall_modernity: int
    kitchen_modernity: int
    image_url: List[str]

def save_models_to_json(models: list[BaseModel], path: str) -> None:
    """
    Serializes a list of Pydantic models to a JSON file.
    """
    # 1) Convert each model to a dict
    data = [m.model_dump() for m in models]

    # 2) Write out as JSON
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)



# Connect to your database
engine = create_engine('sqlite:///../data/properties3.db')

# Execute the query
query = """
SELECT pi.property_id, pi.url, a.*
FROM property_images pi
JOIN appliances a ON pi.property_id = a.property_id
WHERE a.washing_machine != 'unknown'
"""

with engine.connect() as connection:
    result = connection.execute(text(query))
    rows = result.fetchall()

# Group image URLs by property_id
property_images = defaultdict(list)
property_data = {}

for row in rows:
    property_id = row.property_id
    image_url = row.url
    
    # Add image URL to the list for this property
    property_images[property_id].append(image_url)
    
    # Store property data (only needs to be done once per property)
    if property_id not in property_data:
        property_data[property_id] = {
            'property_id': property_id,
            'furnished': row.furnished,
            'washing_machine': row.washing_machine,
            'refrigerator': row.refrigerator,
            'stove_type': row.stove_type,
            'water_heater_type': row.water_heater_type,
            'heating_type': row.heating_type,
            'overall_modernity': row.modernity,  # Note the field name mapping
            'kitchen_modernity': row.kitchenmodernity  # Note the field name mapping
        }

# Create list of ImageInsightModel objects
insight_models = []
for property_id, property_info in property_data.items():
    model = ImageInsightModel(
        **property_info,
        image_url=property_images[property_id]
    )
    insight_models.append(model)

# Now you have a list of ImageInsightModel objects
print(f"Generated {len(insight_models)} ImageInsightModel objects")

path = "processed_image_2.json"

save_models_to_json(insight_models, path)