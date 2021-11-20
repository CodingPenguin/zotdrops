from flask import Flask
from flask import request
from flask_cors import CORS
from collections import defaultdict

app = Flask(__name__)
CORS(app)

users = {}

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

'''TODO MAP STUFF'''

# calendar of upcoming petrdrops

#key = name of dropper, value = Drop(time, dropper_name, location_name, location_coordinates)
class drop:
    def __init__(self, time, dropper_name, location_name, location_coordinates):
        self.time = time
        self.dropper = dropper_name
        self.location_name = location_name
        self.location_coordinates = location_coordinates
    
    def get_time():
        return self.time
    
    def get_dropper_name():
        return self.dropper

    def get_location_name():
        return self.location_name

    def get_location_coordinates():
        return self.location_coordinates



drop_dict = {}


# pin current drop locations



''' petr droppers'''

# make account


# @app.route("/signup", methods=["POST"])
# def signup():
#     if (request.form["username"] and request.form["password"]):
#         users[str(request.form["username"])] = str(request.form["password"])
#         return "200"
#     else:
#         return "400"

# @app.route("/verify", methods=["POST"])
# def verify():
#     if (users[request.form['username']] != None):
#         if (users[request.form['username']] == request.form['password']): 
#             return "200"
#     return "403"

# verify legit dropper (done previous drop via insta or discord before)

#