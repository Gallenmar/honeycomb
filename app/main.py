from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from app import database, models
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime
from starlette import status
from .routers import apartments  # Import your apartments router

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

# Include only the apartments router
app.include_router(apartments.router) 