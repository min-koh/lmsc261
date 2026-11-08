import json

def check_age_experience(skaters):
    for skater_info in skaters:
        name = skater_info.get("name", "key not found")
        age = skater_info.get("age", "key not found")
        is_experienced = skater_info.get("is_experienced", "key not found")
        
        if (age >= 13 and is_experienced):
            print(f"Hi {name}, welcome to the skate park!")

try:
    data_json = open("skaters.json")
    data_dict = json.load(data_json)
    check_age_experience(data_dict)

except FileNotFoundError:
    print("File Not Found! Try Again.")