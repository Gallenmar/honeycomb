"""
Reference Models 
DO NOT USE FOR PARSING
"""
from pydantic import BaseModel, Field
from typing import Optional, List, Literal, Annotated


class Location(BaseModel):
    country: str = "Latvia"
    city: str
    street: str
    district: Optional[str]

class RentDetails(BaseModel):
    monthly_rent_eur: int
    management_fee_winter_eur: int
    management_fee_summer_eur: int
    all_utilities_included: bool = False
    payment_terms: Optional[str]

class PropertyCharacteristics(BaseModel):
    size_m2: float
    floor: Annotated[int, Field(strict=True, gt=0)]
    high_ceilings: Optional[bool]
    flooring_type: Optional[str]
    renovated: bool
    building_type: Optional[str]
    courtyard_location: Optional[str]

class Rooms(BaseModel):
    bedrooms: Annotated[int, Field(strict=True, gt=0)]
    bathrooms: Annotated[int, Field(strict=True, gt=0)] 
    bathroom_description: Optional[str]
    kitchen: bool
    kitchen_description: Optional[str]
    living_room: bool 

class Appliances(BaseModel):
    furnished: bool
    washing_machine: bool
    refrigerator: bool
    stove: bool
    stove_type: Optional[Literal["gas", "electric"]]
    water_heater: bool
    water_heater_type: Optional[Literal["electric", "gas"]]
    heating_type: Optional[str]

class OutdoorFeatures(BaseModel):
    courtyard: bool
    balcony: bool
    parking: bool
    parking_type: Optional[Literal["paid", "free"]]


class NearbyInfrastructure(BaseModel):
    grocery_distance_min: Optional[int]
    transport_distance_min: Optional[int]
    points_of_interest: Optional[str]


class HousingListing(BaseModel):
    listing_type: str = "rent"
    property_type: Literal["apartment", "house", "room"]
    location: Location
    rent_details: RentDetails
    property_characteristics: PropertyCharacteristics
    rooms: Rooms
    appliances: Appliances
    outdoor_features: OutdoorFeatures
    nearby_infrastructure: NearbyInfrastructure
