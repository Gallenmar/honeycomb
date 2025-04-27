from langchain_openai import ChatOpenAI
from dotenv import load_dotenv

load_dotenv()

class GPTLLM:

    @classmethod
    def get_model_o4_mini(cls):
        """
        Get GPT 4o mini model
        """
        try:
            return ChatOpenAI(
                model_name="o4-mini-2025-04-16"
            )

        except Exception as e:
            print(f"Error initializing GPT 4o mini Model:{e} ")
        pass


