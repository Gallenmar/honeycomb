from pydantic import BaseModel, Field, HttpUrl, conint, constr
from typing import Optional, List, Literal


class Location(BaseModel):
    country: str = "Latvia"
    city: str
    district: Optional[str]


class RentDetails(BaseModel):
    monthly_rent_eur: float
    management_fee_winter_eur: float
    management_fee_summer_eur: float
    utilities_included: bool = False
    utility_details: Optional[List[str]] = Field(default_factory=list)
    payment_terms: Optional[str]


class PropertyCharacteristics(BaseModel):
    size_m2: float
    floor: conint(ge=0)
    high_ceilings: bool
    flooring_type: Optional[str]
    renovated: bool
    building_type: Optional[str]
    courtyard_location: Optional[bool]


class Rooms(BaseModel):
    bedrooms: conint(ge=0)
    kitchen: bool
    living_room: bool
    bathroom_description: Optional[str]
    utility_room: bool


class Appliances(BaseModel):
    furnished: bool
    washing_machine: bool
    refrigerator: bool
    stove_type: Optional[Literal["gas", "electric"]]
    water_heater_type: Optional[Literal["electric", "gas"]]
    heating_type: Optional[str]


class OutdoorFeatures(BaseModel):
    courtyard: bool
    bbq_area: bool
    parking_available: bool
    parking_type: Optional[Literal["paid", "free"]]


class NearbyInfrastructure(BaseModel):
    grocery_distance_min: Optional[int]
    transport_distance_min: Optional[int]
    time_to_old_town_min: Optional[int]


class ListingLanguages(BaseModel):
    languages: List[Literal["Latvian", "Russian", "English"]]


class HousingListing(BaseModel):
    listing_type: Literal["rent", "sale"]
    property_type: Literal["apartment", "house", "room"]
    location: Location
    rent_details: RentDetails
    property_characteristics: PropertyCharacteristics
    rooms: Rooms
    appliances: Appliances
    outdoor_features: OutdoorFeatures
    nearby_infrastructure: NearbyInfrastructure
    listing_languages: ListingLanguages
    source_url: Optional[HttpUrl]
