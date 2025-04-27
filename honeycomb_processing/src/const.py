"""
Prompt for extracting info from the listings
"""
PROMPT_TEMPLATE = """
Listing Details:
- ID: {listing_id}
- DATE: {listing_date}
- URL: {listing_url}
- PHONE: {listing_phone}

Rental Details
>> ROOMS: {rooms}
>> PRICE: {price}
>> AREA: {area}
>> STREET: {street}

DESCRIPTION:
{description}
"""
SQL_QUERY = """SELECT id,  
    listing_date, 
    url,  
    phone,
    address,  
    rooms,
    area,  
    price,   
    description FROM properties
    WHERE id IN (
    SELECT property_id
    FROM appliances
    WHERE washing_machine <> 'unknown'
)"""

SQL_IMAGE_QUERY = """
SELECT pi.property_id, pi.url, a.*
FROM property_images pi
JOIN appliances a ON pi.property_id = a.property_id
WHERE a.washing_machine != 'unknown'
"""