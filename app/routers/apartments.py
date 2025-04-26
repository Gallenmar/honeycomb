from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app import models
from app.database import get_db

router = APIRouter(
    prefix="/apartments",
    tags=["apartments"]
)

@router.get("/", summary="Get all apartments")
def get_apartments(db: Session = Depends(get_db)):
    apartments = db.query(models.HousingListing).all()
    # Convert SQLAlchemy models to dicts for JSON response
    return [
        {
            "id": apt.id,
            "listing_type": apt.listing_type,
            "property_type": apt.property_type,
            "location": {
                "country": apt.location.country,
                "city": apt.location.city,
                "district": apt.location.district,
            } if apt.location else None,
            "rent_details": {
                "monthly_rent_eur": apt.rent_details.monthly_rent_eur,
                "management_fee_winter_eur": apt.rent_details.management_fee_winter_eur,
                "management_fee_summer_eur": apt.rent_details.management_fee_summer_eur,
                "utilities_included": apt.rent_details.utilities_included,
                "utility_details": apt.rent_details.utility_details,
                "payment_terms": apt.rent_details.payment_terms,
            } if apt.rent_details else None,
            "source_url": apt.source_url,
            # Add more fields as needed
        }
        for apt in apartments
    ]
