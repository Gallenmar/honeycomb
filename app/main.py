from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app import database, models
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

# Pydantic models for request/response
class TodoCreate(BaseModel):
    title: str
    description: Optional[str] = None

class TodoResponse(BaseModel):
    id: int
    title: str
    description: Optional[str]
    completed: bool
    created_at: datetime

    class Config:
        from_attributes = True

app = FastAPI(title="FastAPI Boilerplate")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables on startup
@app.on_event("startup")
async def startup():
    database.Base.metadata.create_all(bind=database.engine)

@app.get("/")
async def root():
    return {"message": "Welcome to FastAPI Boilerplate"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# CRUD operations for Todo
@app.post("/todos/", response_model=TodoResponse)
async def create_todo(todo: TodoCreate, db: Session = Depends(database.get_db)):
    db_todo = models.Todo(
        title=todo.title,
        description=todo.description
    )
    db.add(db_todo)
    db.commit()
    db.refresh(db_todo)
    return db_todo

@app.get("/todos/", response_model=List[TodoResponse])
async def get_todos(db: Session = Depends(database.get_db)):
    todos = db.query(models.Todo).all()
    return todos

@app.get("/todos/{todo_id}", response_model=TodoResponse)
async def get_todo(todo_id: int, db: Session = Depends(database.get_db)):
    todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()
    if todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")
    return todo

@app.put("/todos/{todo_id}/complete")
async def complete_todo(todo_id: int, db: Session = Depends(database.get_db)):
    todo = db.query(models.Todo).filter(models.Todo.id == todo_id).first()
    if todo is None:
        raise HTTPException(status_code=404, detail="Todo not found")
    todo.completed = True
    db.commit()
    return {"message": "Todo marked as completed"} 