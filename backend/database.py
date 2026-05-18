from sqlalchemy import create_engine

DATABASE_URL = "postgresql://localhost/bank_ai?host=/tmp"

engine = create_engine(DATABASE_URL)
