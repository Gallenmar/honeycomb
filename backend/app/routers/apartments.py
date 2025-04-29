from fastapi import APIRouter
import json
from fastapi.responses import JSONResponse
import os

router = APIRouter(
    prefix="/apartments",
    tags=["apartments"]
)

@router.get("/", summary="Get all apartments")
def get_apartments(city: str = None, bedrooms: int = None):
    sample_path = os.path.join(os.path.dirname(__file__), '../../data/merged.json')
    with open(sample_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    if city:
        data = [apt for apt in data if apt.get("location", {}).get("city") == city]
    if bedrooms is not None:
        data = [apt for apt in data if apt.get("rooms", {}).get("bedrooms") == bedrooms]
    return JSONResponse(content=data)
