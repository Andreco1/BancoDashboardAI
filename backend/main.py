from ai import ask_ai
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {
        "message": "Bank AI Backend Running"
    }

@app.post("/ask")
def ask(data: dict):

    question = data["question"]

    response = ask_ai(question)

    return {
        "response": response
    }
