import requests
import json
import re
import os
from flask import redirect, request, url_for, render_template
from flask.views import MethodView
from google.cloud import translate_v2 as translate


class Directions(MethodView):
      
  # Class should start with base text for user to see upon visiting site.
  # Create dictionary to pass information to frontend.
  def __init__(self):
        self.text = dict(original='No directions', translation='No Translation')
  
  # Render the website with base information because route is chosen. 
  def get(self):
        return render_template('directions.html', text=self.text)
  
  # Return directions and translation to frontent by calling 
  # each funtion. 
  def post(self):
    #Get variable information from website frontend.
    origin = request.form['origin']
    destination = request.form['destination'] 
    target = request.form.get('language')
    
    self.directions(origin, destination)
    self.translate(target, self.text['original'])
    
    return render_template('directions.html', text=self.text)
  
  
  # Call Google Directions API for route information.
  def directions(self, origin, destination):    
    #API Key used for API Call
    api_key= os.getenv('API_KEY') #Grab API key from environment variable
    payload={}
    headers = {}

    # Create URL for API call
    url = f"https://maps.googleapis.com/maps/api/directions/json?origin={origin}&destination={destination}&key={api_key}"

    # API Call
    response = requests.request("GET", url, headers=headers, data=payload)
    
    # Parse JSON response
    data = json.loads(response.text)
    
    # Check if API call was successful
    # Extract relevant information from the parsed JSON
    if data['status'] == 'OK':
      route = data['routes'][0] 
      leg = route['legs'][0]    # Assuming there is at least one leg
      duration = leg['duration']['text']
      distance = leg['distance']['text']
      start_address = leg['start_address']
      end_address = leg['end_address']

      # Assign new variables with required formatting.
      start = 'Starting destination: ' + start_address + ' <br> '
      end = 'Ending destination: ' + end_address + ' <br> '
      duration = 'Duration: ' + duration + ' <br> '
      distance = 'Distance: ' + distance + ' <br> '
      directions = ' <br> ' + 'Directions: ' + ' <br> '

      # Regex Pattern to remove html code
      pattern = r'<[^>]+>'

      # Print HTML instructions for each step
      steps = leg['steps']
      instructions = ''
      
      # For each step in the route, clean the step and add it to a instructions string.
      for step in steps:
        html_instructions = step['html_instructions']
        clean_step = re.sub(pattern, '', html_instructions)
        instructions += clean_step + ' <br> '

      # Compose final string containing all information.
      final_text = start + end + duration + distance + directions + instructions
      
      # Add string to dict. 
      self.text['original'] = final_text
    
    else:
        # If instructions not found, add message to dict. 
        self.text['original'] = "Directions not found."
    
    return True
  
  # Call Google Translate API to translate route information into desired language.
  def translate(self, target: str, text: str) -> dict:    
    translate_client = translate.Client()

    if isinstance(text, bytes):
        text = text.decode("utf-8")

    #Google Translate API Call. 
    result = translate_client.translate(text, target_language=target)

    #Keep translated text and assign it to dictionary.
    translated = result["translatedText"]
    self.text['translation'] = translated

    return True