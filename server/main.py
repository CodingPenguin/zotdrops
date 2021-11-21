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


@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route("/drops", methods=['GET', 'POST'])
def drop():
    if request.method == 'GET':
        collection_object = ZotdropsCollection.find()
        collection_list = [things for things in collection_object]
        # return_item = json.dumps(collection_list)
        # print(return_item)
        return json.dumps(collection_list)
    
    if request.method == 'POST':
        # date = request.form['date']
        # time = request.form['time']
        # dropper_name = request.form['dropperName']
        # location_name = request.form['locationName']
        # location_coordinates = request.form['locationCoords']
        date = request.json['date']
        time = request.json['time']
        dropper_name = request.json['dropperName']
        location_name = request.json['locationName']
        location_coordinates = request.json['locationCoords']
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
            ZotdropsCollection.update_one({'_id': date}, {'$push': {'drops': update_object}})
            return '200'
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
            return '200'
            
            
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


# testing database adding
# test_object = {
#     '_id': 'wuesday',
#     'drops' : [{'time': '12:00', 'dropper_name':'petr', 'location_name':'dbh', 'location_coordinates':{'latitude':'north', 'longitude':'west'}}]
# }
#test_object = [{'time': '12:00', 'dropper_name':'petr', 'location_name':'dbh', 'location_coordinates':{'latitude':'north', 'longitude':'west'}}]
# test_date = 'tuesday'
# insertion = {
#     test_date: test_object
# }


#print(ZotdropsCollection.insert_one(test_object))



