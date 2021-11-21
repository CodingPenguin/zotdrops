import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import axios from 'axios';

const data = [
  {
    "_id": "tuesday",
    "drops": [
      {
        "time": "12:00",
        "dropper_name": "petr",
        "location_name": "dbh",
        "location_coordinates": {
          "latitude": "north",
          "longitude": "west"
        }
      }
    ]
  },
  {
    "_id": "wuesday",
    "drops": [
      {
        "time": "12:00",
        "dropper_name": "petr",
        "location_name": "dbh",
        "location_coordinates": {
          "latitude": "north",
          "longitude": "west"
        }
      },
      {
        "time": "12:00",
        "dropper_name": "petr",
        "location_name": "dbh",
        "location_coordinates": {
          "latitude": "north",
          "longitude": "west"
        }
      }
    ]
  },
  {
    "_id": "11/20/2021",
    "drops": [
      {
        "time": "12:00",
        "dropper_name": "petr",
        "location_name": "dbh",
        "location_coordinates": {
          "latitude": "north",
          "longitude": "west"
        }
      },
      {
        "time": "12:00",
        "dropper_name": "petr",
        "location_name": "dbh",
        "location_coordinates": {
          "latitude": 9999,
          "longitude": 8888
        }
      },
      {
        "time": "12:00",
        "dropper_name": "petr",
        "location_name": "dbh",
        "location_coordinates": {
          "latitude": 9999,
          "longitude": 8888
        }
      }
    ]
  }
]

function ReceiveDrop() {
    const [positions, setPositions] = useState([]);
    useEffect(getUpdatedPositions, [])

    function getUpdatedPositions(){
        axios.get('http://127.0.0.1:5000/drops')
        .then((response) => {
          response = response['data']
          let today = new Date(),
          todayDate =  (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
          let serverData = [];
          for(let i = 0; i < response.length; i++) {
          
            if (response[i]['_id'] == todayDate) {

              for(let j = 0; j < response[i]['drops'].length; j++) {
                let lat = response[i]['drops'][j]['location_coordinates']['latitude']
                let long = response[i]['drops'][j]['location_coordinates']['longitude']
                console.log(lat);
                console.log(long);
                let coordinates = [lat, long];
                serverData.push(coordinates);
            
              }
            }
          }
          setPositions(serverData);
          console.log(serverData);

        })
        // let serverData = [[0, 0]];

    }

    function hello(pos){
        return (
        <Marker position={pos}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>);

    }
    return <>
        {
            positions.map(hello)
        }
    </>;
  }

  export default ReceiveDrop;