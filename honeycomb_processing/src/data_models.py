"""
Base Models for Structured Output according to LangChain documentation
"""
from pydantic import BaseModel, Field
from typing import Optional, List, Literal

class Location(BaseModel):
    """Location details of the property."""
    country: str = Field(..., description="Country where the property is located")
    city: str = Field(..., description="City where the property is located")
    street: str = Field(..., description="Street address of the property")
    district: Optional[str] = Field(None, description="District or neighborhood within the city")

class RentDetails(BaseModel):
    """Rental payment details."""
    property_type: Literal["apartment", "house", "room"] = Field(
        description="Type of property being listed"
    )
    description_summary: str = Field(description="Comprehensive bullet point list of the listing. Max 50 words")
    rent_pricing_eur: int = Field( description="Rent amount in Euros")
    rent_type: str = Field(description="Type of Rent (e.g. Daily, Monthly, Weekly)")
    management_fee_winter_eur: Optional[int] = Field(None, description="Winter season management fee in Euros")
    management_fee_summer_eur: Optional[int] = Field(None, description="Summer season management fee in Euros")
    all_utilities_included: bool = Field(..., description="Whether all utilities are included in the rent price")
    payment_terms: Optional[str] = Field(None, description="Special payment terms or conditions if applicable")
    pet_friendly: Literal["no","yes"] = Field(None, description="Pets are welcome in the property.")

class PropertyCharacteristics(BaseModel):
    """Physical characteristics of the property."""
    size_m2: int = Field(..., description="Property size in square meters")
    floor: int = Field(..., description="Floor number of the property")
    high_ceilings: Optional[bool] = Field(None, description="Whether the property has high ceilings")
    flooring_type: Optional[str] = Field(None, description="Type of flooring in the property (e.g., hardwood, tile)")
    renovated: bool = Field(..., description="Whether the property has been renovated")
    building_type: Optional[str] = Field(None, description="Type of building (e.g., pre-war, modern, etc.)")
    courtyard_location: Optional[str] = Field(None, description="Description of courtyard location if applicable")

class Rooms(BaseModel):
    """Room counts and descriptions."""
    rooms: int = Field(description="Number of Rooms")
    bedrooms: int = Field(description="Number of bedrooms")
    bathrooms: int = Field(description="Number of bathrooms")
    bathroom_description: Optional[str] = Field(None, description="Description of bathroom features")
    kitchen: bool = Field(description="Whether the property has a kitchen")
    kitchen_description: Optional[str] = Field(None, description="Description of kitchen features")
    living_room: bool = Field(description="Whether the property has a living room")

class Appliances(BaseModel):
    """Included appliances."""
    furnished: bool = Field(..., description="Whether the property comes furnished")
    washing_machine: bool = Field(..., description="Whether a washing machine is included")
    refrigerator: bool = Field(..., description="Whether a refrigerator is included")
    stove: bool = Field(..., description="Whether a stove is included")
    stove_type: Optional[Literal["gas", "electric"]] = Field(
        None, description="Type of stove (gas or electric)"
    )
    water_heater: bool = Field(..., description="Whether a water heater is included")
    water_heater_type: Optional[Literal["electric", "gas"]] = Field(
        None, description="Type of water heater (electric or gas)"
    )
    heating_type: Optional[str] = Field(None, description="Type of heating system in the property")

class OutdoorFeatures(BaseModel):
    """Outdoor amenities."""
    courtyard: bool = Field(..., description="Whether the property has access to a courtyard")
    balcony: bool = Field(..., description="Whether the property has a balcony")
    parking: bool = Field(..., description="Whether parking is available")
    parking_type: Optional[Literal["paid", "free"]] = Field(
        None, description="Type of parking (paid or free)"
    )

class NearbyInfrastructure(BaseModel):
    """Proximity to key services."""
    grocery_distance_min: Optional[int] = Field(
        None, description="Walking distance to nearest grocery store in minutes"
    )
    transport_distance_min: Optional[int] = Field(
        None, description="Walking distance to nearest public transport in minutes"
    )
    points_of_interest: Optional[List[str]] = Field(
        None, description="Notable points of interest near the property"
    )

class ListingIdentifiers(BaseModel):
    listing_id: Optional[str]= Field(None, description="Identification ID of the listing")
    listing_date: Optional[str]= Field(None, description="Date when the listing was published")
    listing_url: Optional[str]= Field(None, description="URL link to the listing") 
    listing_phone: Optional[str]= Field(None, description="Contact Phone from the listing")
    listing_type: Literal["rent", "sale"] = Field(description="Type of listing (e.g., rent, sale)")

class HousingListing(BaseModel):
    """A full housing listing."""
    location: Location = Field(description="Location details of the property")
    rent_details: RentDetails = Field(description="Rental payment details")
    property_characteristics: PropertyCharacteristics = Field(
        description="Physical characteristics of the property"
    )
    
    rooms: Rooms = Field(description="Information about rooms in the property")
    appliances: Appliances = Field(description="Appliances included with the property")
    outdoor_features: OutdoorFeatures = Field(description="Outdoor features of the property")
    nearby_infrastructure: NearbyInfrastructure = Field(
        description="Information about nearby amenities and infrastructure (e.g. markets, bus stations or interest points)."
    )

    listing_details: ListingIdentifiers = Field(description="Identification Data Regarding the listing")
    
