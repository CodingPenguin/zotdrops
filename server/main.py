import json
from flask import Flask
from flask import request
from collections import defaultdict
from flask_cors import CORS
from pymongo import MongoClient

#mongodb database info
client = MongoClient("mongodb+srv://caroliyw:hydroflask@cluster0.2w26s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
Zotdropdb = client.zotdrops
ZotdropsCollection = Zotdropdb.drops

app = Flask(__name__)
CORS(app)


drops_dict: dict = defaultdict(list)

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
        
        if ZotdropsCollection.find_one({'_id': date}):
            #update
            update_object = \
            {
                'time': time, 
                'dropper_name': dropper_name, 
                'location_name': location_name, 
                'location_coordinates': 
                    {
                    'latitude': location_coordinates['lat'], 
                    'longitude': location_coordinates['lng']
                    }
            }
            ZotdropsCollection.update_one({'_id': date}, {'$push': {'drops': update_object }})
            
        else:
            #insert
            insert_object = \
            {
            '_id': date, 
            'drops': 
                [
                    {
                    'time': time, 
                    'dropper_name': dropper_name, 
                    'location_name': location_name, 
                    'location_coordinates': 
                        {
                        'latitude': location_coordinates['lat'], 
                        'longitude': location_coordinates['lng']
                        }
                    }
                ]
            }
            ZotdropsCollection.insert_one(insert_object)
            
            
        #drops_dict[date].append({'time': time, 'dropper_name': dropper_name, 'location_name': location_name, 'location_coordinate':location_coordinates})
        

# admin account login

@app.route("/signin", methods=["POST"])
def signin():
    if request.form['username'] == 'admin':
        if request.form['password'] == 'admin':
            return "200"
    return '403'

    
#'''TODO MAP STUFF'''

# calendar of upcoming petrdrops

#key = name of dropper, value = Drop(time, dropper_name, location_name, location_coordinates)
# class Drop:
#     def __init__(self, time, dropper_name, location_name, location_coordinates):
#         self.time = time
#         self.dropper = dropper_name
#         self.location_name = location_name
#         self.location_coordinates = location_coordinates
    
#     def get_time(self):
#         return self.time
    
#     def get_dropper_name(self):
#         return self.dropper

#     def get_location_name(self):
#         return self.location_name

#     def get_location_coordinates(self):
#         return self.location_coordinates


#testing database adding
# test_object = {
#     '_id': 'tuesday',
#     'drops' : [{'time': '12:00', 'dropper_name':'petr', 'location_name':'dbh', 'location_coordinates':{'latitude':'north', 'longitude':'west'}}]
# }
# test_object = [{'time': '12:00', 'dropper_name':'petr', 'location_name':'dbh', 'location_coordinates':{'latitude':'north', 'longitude':'west'}}]
# test_date = 'tuesday'
# insertion = {
#     test_date: test_object
# }


# print(ZotdropsCollection.insert_one(test_object))


''' petr droppers'''

    
# @app.route("/verify", methods=["POST"])
# def verify():
#     if (users[request.form['username']] != None):
#         if (users[request.form['username']] == request.form['password']): 
#             return "200"
#     return "403"

# verify legit dropper (done previous drop via insta or discord before)

#