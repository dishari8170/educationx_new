import requests

# Replace with your API credentials
client_id = "your_client_id"
client_secret = "your_client_secret"

# Define the token URL
token_url = "https://zoom.us/oauth/token"

# Define the payload for the token request
data = {
    "grant_type": "client_credentials",
    "client_id": "nOi8JiPR92DltwEgfaaYg",
    "client_secret": "0MEMbuLum1StDPMtMLgzyBKSPeibOGTO"
}

# Send the token request
response = requests.post(token_url, data=data)

# Check if the request was successful and retrieve the access token
if response.status_code == 200:
    access_token = response.json()["access_token"]
    print("Access Token:", access_token)
else:
    print("Failed to obtain the access token.")
    print("Error message:", response.json())
