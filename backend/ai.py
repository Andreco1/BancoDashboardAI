import os

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

def ask_ai(question: str):

    prompt = f"""
    Eres un asistente SQL para un banco.

    Tabla:
    transactions(
      id,
      branch,
      amount,
      status,
      transaction_date
    )

    Convierte esta pregunta a SQL:

    {question}
    """

    response = client.chat.completions.create(
        model="gpt-4.1-mini",

        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ]
    )

    return response.choices[0].message.content
