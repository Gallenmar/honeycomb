from fastapi import APIRouter

router = APIRouter(
    prefix="/apartments",
    tags=["apartments"]
)

@router.get("/", summary="Get all apartments")
def get_apartments():
    # Replace with actual DB call or logic
    return [
        {"id": 1, "name": "Apartment A", "location": "Downtown"},
        {"id": 2, "name": "Apartment B", "location": "Uptown"},
    ]
