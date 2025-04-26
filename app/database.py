from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

# SQLite database URL
SQLALCHEMY_DATABASE_URL = 'sqlite:///./app.db'

# Create the database engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# Create SessionLocal class for database sessions
SessionLocal = sessionmaker(autoflush=False, bind=engine)

# Create Base class for database models
Base = declarative_base()

# Dependency to get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close() 