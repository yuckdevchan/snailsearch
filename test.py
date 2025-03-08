import requests

suggestions = requests.get(f"https://suggestqueries.google.com/complete/search?output=firefox&q=what", verify=False)
print(suggestions.json())