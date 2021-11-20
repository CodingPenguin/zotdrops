import json
from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

drops_dict: dict = {}

# request.form = {
#     'date': '',
#     'time': '',
#     'name': '',
#     'location_name': '',
#     'location_coords': ''
# }

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/drops", methods=['GET', 'POST'])
def drop():
    if request.method == 'GET':
        return json.dumps(drops_dict)
    
    if request.method == 'POST':
        date = request.form['date']
        time = request.form['time']
        dropper_name = request.form['dropperName']
        location_name = request.form['locationName']
        location_coordinates = request.form['locationCoords']
        
        drops_dict[date] = Drop(time, dropper_name, location_name, location_coordinates)
        

'''TODO MAP STUFF'''

# calendar of upcoming petrdrops

#key = name of dropper, value = Drop(time, dropper_name, location_name, location_coordinates)
class Drop:
    def __init__(self, time, dropper_name, location_name, location_coordinates):
        self.time = time
        self.dropper = dropper_name
        self.location_name = location_name
        self.location_coordinates = location_coordinates
    
    def get_time(self):
        return self.time
    
    def get_dropper_name(self):
        return self.dropper

    def get_location_name(self):
        return self.location_name

    def get_location_coordinates(self):
        return self.location_coordinates



# pin current drop locations



''' petr droppers'''

# admin account login

@app.route("/signin", methods=["POST"])
def signin():
    if request.form['username'] == 'admin':
        if request.form['password'] == 'admin':
            return "200"
    return '403'
    
# @app.route("/verify", methods=["POST"])
# def verify():
#     if (users[request.form['username']] != None):
#         if (users[request.form['username']] == request.form['password']): 
#             return "200"
#     return "403"

# verify legit dropper (done previous drop via insta or discord before)

#