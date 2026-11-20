import requests 
import json

headers = {
    "AIC-User-Agent": "museum-crawler (mkoh@berklee.edu)",
    "User-Agent": "museum-crawler (mkoh@berklee.edu)",
} 

search = input("what do you want to search? ")
min_year = int(input("What's the minimum year you'd like to search? "))
max_year = int(input("What's the maximum year you'd like to search? "))

params = { 
    'q' : search,
	'fields' : "title,artist_display,date_display,date_start", # no spaces here, reason that I put date_start: date_display is string, so for number comparison I used date_start
    # date_display: string - Readable, free-text description of the period of time associated with the creation of this work. 
        # This might include date terms like Dynasty, Era etc. Written by curators and editors in house style, and is the preferred field for display on websites and apps.
    # artist_display: string - Readable description of the creator of this work. Includes artist names, nationality and lifespan dates
    'limit' : 10
}

response = requests.get("https://api.artic.edu/api/v1/artworks/search", params=params, headers=headers)
    # (From website) If you want to search and filter the results, you can do so via our search endpoints. <- So that I added "/search" here
data = response.json()

# print(json.dumps(data, indent=2)) <- I was confused so for check it I used this and just hid after use.

def format_and_print(data, min_year, max_year):
  art_data = data['data']
  for d in art_data:
    title = d['title']
    info = d['artist_display']
    year = d['date_display']
    year_for_comparison = d['date_start']
    if min_year <= year_for_comparison <= max_year:
        print(f"{title} is by {info} which was displayed on {year}")

format_and_print(data, min_year, max_year)