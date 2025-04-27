import json

# 1. Carga los dos ficheros
with open('processed_descriptions.json', encoding='utf-8') as f1, open('processed_image_2.json', encoding='utf-8') as f2:
    data1 = json.load(f1)    # lista de dicts con clave listing_details.listing_id
    data2 = json.load(f2)    # lista de dicts con clave property_id

# 2. Indexa el segundo archivo por property_id
idx2 = { item['property_id']: item for item in data2 }

merged = []
for obj1 in data1:
    # 3. Extrae el ID común
    lid = obj1['listing_details']['listing_id']
    key = int(lid) if isinstance(lid, str) and lid.isdigit() else lid

    obj2 = idx2.get(key)
    if not obj2:
        merged.append(obj1)
        continue

    # 4. Normaliza y prepara las nuevas claves
    norm_appliances = {
        'furnished': obj2.get('furnished') == 'yes',
        'washing_machine': obj2.get('washing_machine') == 'yes',
        'refrigerator': obj2.get('refrigerator') == 'yes',
        'water_heater_type': None if obj2.get('water_heater_type') == 'unknown' else obj2.get('water_heater_type'),
        'heating_type': None if obj2.get('heating_type') == 'unknown' else obj2.get('heating_type'),
        'overall_modernity': obj2.get('overall_modernity'),
        'kitchen_modernity': obj2.get('kitchen_modernity'),
    }

    # 5. Fusiona dentro de 'appliances'
    appliances = obj1.get('appliances', {})
    appliances.update(norm_appliances)
    obj1['appliances'] = appliances

    # 6. Conserva también la galería de imágenes
    obj1['image_url'] = obj2.get('image_url', [])

    merged.append(obj1)

# 7. Escribe el JSON resultante
with open('merged.json', 'w', encoding='utf-8') as fout:
    json.dump(merged, fout, ensure_ascii=False, indent=2)