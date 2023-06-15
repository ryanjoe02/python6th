import requests
import json

apikey = "7f0c2e2329f886556fc99b93d61a7372"
lat = 37.53
lon = 127.02
api = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={apikey}&units=metric"
# units=metric : converted fahrenheit to celsius
result = requests.get(api)
#print(result.text)

data = json.loads(result.text)

print(data["name"])
print(data["main"]["feels_like"])