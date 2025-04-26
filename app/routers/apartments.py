from fastapi import APIRouter
import json
from fastapi.responses import JSONResponse
import os

router = APIRouter(
    prefix="/apartments",
    tags=["apartments"]
)

@router.get("/", summary="Get all apartments")
def get_apartments():
    sample_path = os.path.join(os.path.dirname(__file__), '../../data/sample.json')
    with open(sample_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return JSONResponse(content=data)
