from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.models import (
    Location, RentDetails, PropertyCharacteristics, Rooms, Appliances,
    OutdoorFeatures, NearbyInfrastructure, ListingLanguages, HousingListing
)

def seed():
    db: Session = SessionLocal()

    # Example Location
    location = Location(country="Latvia", city="Riga", district="Centrs")
    db.add(location)
    db.commit()
    db.refresh(location)

    # Example RentDetails
    rent_details = RentDetails(
        monthly_rent_eur=800,
        management_fee_winter_eur=50,
        management_fee_summer_eur=30,
        utilities_included=True,
        utility_details="Water, Heating, Electricity",
        payment_terms="First and last month"
    )
    db.add(rent_details)
    db.commit()
    db.refresh(rent_details)

    # Example PropertyCharacteristics
    property_characteristics = PropertyCharacteristics(
        size_m2=75,
        floor=2,
        high_ceilings=True,
        flooring_type="Wood",
        renovated=True,
        building_type="Brick",
        courtyard_location=True
    )
    db.add(property_characteristics)
    db.commit()
    db.refresh(property_characteristics)

    # Example Rooms
    rooms = Rooms(
        bedrooms=2,
        kitchen=True,
        living_room=True,
        bathroom_description="Shower and bathtub",
        utility_room=True
    )
    db.add(rooms)
    db.commit()
    db.refresh(rooms)

    # Example Appliances
    appliances = Appliances(
        furnished=True,
        washing_machine=True,
        refrigerator=True,
        stove_type="Electric",
        water_heater_type="Central",
        heating_type="Central"
    )
    db.add(appliances)
    db.commit()
    db.refresh(appliances)

    # Example OutdoorFeatures
    outdoor_features = OutdoorFeatures(
        courtyard=True,
        bbq_area=False,
        parking_available=True,
        parking_type="Garage"
    )
    db.add(outdoor_features)
    db.commit()
    db.refresh(outdoor_features)

    # Example NearbyInfrastructure
    nearby_infrastructure = NearbyInfrastructure(
        grocery_distance_min=5,
        transport_distance_min=3,
        time_to_old_town_min=15
    )
    db.add(nearby_infrastructure)
    db.commit()
    db.refresh(nearby_infrastructure)

    # Example ListingLanguages
    listing_languages = ListingLanguages(
        languages="English,Latvian,Russian"
    )
    db.add(listing_languages)
    db.commit()
    db.refresh(listing_languages)

    # Example HousingListing
    housing_listing = HousingListing(
        listing_type="rent",
        property_type="apartment",
        location_id=location.id,
        rent_details_id=rent_details.id,
        property_characteristics_id=property_characteristics.id,
        rooms_id=rooms.id,
        appliances_id=appliances.id,
        outdoor_features_id=outdoor_features.id,
        nearby_infrastructure_id=nearby_infrastructure.id,
        listing_languages_id=listing_languages.id,
        source_url="https://example.com/listing/1"
    )
    db.add(housing_listing)
    db.commit()

    db.close()
    print("Database seeded successfully.")

if __name__ == "__main__":
    seed()
