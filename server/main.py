from flask import Flask
from flask import request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

users = {}

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"