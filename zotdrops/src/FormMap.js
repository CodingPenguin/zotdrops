import Locationfinder  from "./components/Locationfinder";
import CurrentDropContainer from "./components/CurrentDropContainer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReceiveDrop from "./components/ReceiveDrop";
import './FormMap.css';
import NewComponent from './NewComponent';
import { useState } from "react";
import axios from 'axios';


function FormMap() {
  const style = {
    height: "100%",
    width: "750px",

  }

  const petrStyle = {
    height: "50px",
    width: "50px",
  }

    const [inputField , setInputField] = useState({
      date: '',
      time: '',
      dropName: '',
      locationName: ''
    })

    const [mapData, setMapData] = useState([]);
    const inputsHandler = (e) =>{
        setInputField(prev => ({...prev, [e.target.name]: e.target.value}) )
    }
  
    const submitButton = () =>    { 
      const payload = {
        'date': inputField.date,
        'time': inputField.time,
        'dropperName': inputField.dropName,
        'locationName': inputField.locationName,
        'locationCoords': {
          'lat': mapData[0]['lat'],
          'lng': mapData[0]['lng']
        }
      }

      console.log(payload);

      axios.post('http://127.0.0.1:5000/drops', payload)
      .then((response) => {
        console.log(response)
      })
    }

  return (
    <div className="FormMap">
      <div class='grandparent-wrapper'>
        <div class="parent-wrapper">
          <div class='wrapper'>
            <MapContainer center={[33.6461, -117.8427]} zoom={15} scrollWheelZoom={false} style={style} >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              <Marker position={[31.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              
              </Marker> */}
              <Locationfinder mapData={mapData} setMapData={setMapData}/>
            </MapContainer>
          </div>
        <div id='card-container' class='wrapper'>
          <div class='card'>
            <div id='form' class='card__form'>
              <h1>Drop Info</h1>
              <label class='card__form__label'>Date</label>
              <input type='text' name='date' onChange={inputsHandler} value={inputField.date}/>

              <label class='card__form__label'>Time</label>
              <input type='text' name='time' onChange={inputsHandler} value={inputField.time}/>

              <label class='card__form__label'>Drop Name</label>
              <input type='text' name='dropName' onChange={inputsHandler} value={inputField.dropName}/>
              
              <label class='card__form__label'>Location Name</label>
              <input type='text' name='locationName' onChange={inputsHandler} value={inputField.locationName}/>
              <button class='' onClick={submitButton}>Submit</button>
            </div>
          </div>
        </div>
        </div>
        </div>
      {/* <CurrentDropContainer style={petrStyle} /> */}
    </div>

  );
}

export default FormMap;

