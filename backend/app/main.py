from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
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

@app.get("/")
async def root():
    return {"message": "Welcome to FastAPI Boilerplate"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Include only the apartments router
app.include_router(apartments.router) 