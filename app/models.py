from sqlalchemy import Column, Integer, String, Boolean, DateTime, Float, ForeignKey, Table
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.database import Base

class Todo(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(String)
    completed = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())

class Location(Base):
    __tablename__ = "locations"
    id = Column(Integer, primary_key=True, index=True)
    country = Column(String, default="Latvia")
    city = Column(String)
    district = Column(String, nullable=True)

class RentDetails(Base):
    __tablename__ = "rent_details"
    id = Column(Integer, primary_key=True, index=True)
    monthly_rent_eur = Column(Float)
    management_fee_winter_eur = Column(Float)
    management_fee_summer_eur = Column(Float)
    utilities_included = Column(Boolean, default=False)
    utility_details = Column(String)
    payment_terms = Column(String, nullable=True)

class PropertyCharacteristics(Base):
    __tablename__ = "property_characteristics"
    id = Column(Integer, primary_key=True, index=True)
    size_m2 = Column(Float)
    floor = Column(Integer)
    high_ceilings = Column(Boolean)
    flooring_type = Column(String, nullable=True)
    renovated = Column(Boolean)
    building_type = Column(String, nullable=True)
    courtyard_location = Column(Boolean, nullable=True)

class Rooms(Base):
    __tablename__ = "rooms"
    id = Column(Integer, primary_key=True, index=True)
    bedrooms = Column(Integer)
    kitchen = Column(Boolean)
    living_room = Column(Boolean)
    bathroom_description = Column(String, nullable=True)
    utility_room = Column(Boolean)

class Appliances(Base):
    __tablename__ = "appliances"
    id = Column(Integer, primary_key=True, index=True)
    furnished = Column(Boolean)
    washing_machine = Column(Boolean)
    refrigerator = Column(Boolean)
    stove_type = Column(String, nullable=True)
    water_heater_type = Column(String, nullable=True)
    heating_type = Column(String, nullable=True)

class OutdoorFeatures(Base):
    __tablename__ = "outdoor_features"
    id = Column(Integer, primary_key=True, index=True)
    courtyard = Column(Boolean)
    bbq_area = Column(Boolean)
    parking_available = Column(Boolean)
    parking_type = Column(String, nullable=True)

class NearbyInfrastructure(Base):
    __tablename__ = "nearby_infrastructure"
    id = Column(Integer, primary_key=True, index=True)
    grocery_distance_min = Column(Integer, nullable=True)
    transport_distance_min = Column(Integer, nullable=True)
    time_to_old_town_min = Column(Integer, nullable=True)

class ListingLanguages(Base):
    __tablename__ = "listing_languages"
    id = Column(Integer, primary_key=True, index=True)
    languages = Column(String)

class HousingListing(Base):
    __tablename__ = "housing_listings"
    id = Column(Integer, primary_key=True, index=True)
    listing_type = Column(String)
    property_type = Column(String)
    location_id = Column(Integer, ForeignKey("locations.id"))
    rent_details_id = Column(Integer, ForeignKey("rent_details.id"))
    property_characteristics_id = Column(Integer, ForeignKey("property_characteristics.id"))
    rooms_id = Column(Integer, ForeignKey("rooms.id"))
    appliances_id = Column(Integer, ForeignKey("appliances.id"))
    outdoor_features_id = Column(Integer, ForeignKey("outdoor_features.id"))
    nearby_infrastructure_id = Column(Integer, ForeignKey("nearby_infrastructure.id"))
    listing_languages_id = Column(Integer, ForeignKey("listing_languages.id"))
    source_url = Column(String, nullable=True)

    location = relationship("Location")
    rent_details = relationship("RentDetails")
    property_characteristics = relationship("PropertyCharacteristics")
    rooms = relationship("Rooms")
    appliances = relationship("Appliances")
    outdoor_features = relationship("OutdoorFeatures")
    nearby_infrastructure = relationship("NearbyInfrastructure")
    listing_languages = relationship("ListingLanguages")
