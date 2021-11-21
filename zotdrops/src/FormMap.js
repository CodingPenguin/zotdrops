import Locationfinder  from "./components/Locationfinder";
import CurrentDropContainer from "./components/CurrentDropContainer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReceiveDrop from "./components/ReceiveDrop";
import './FormMap.css';
import NewComponent from './NewComponent';


function FormMap() {
  const style = {
    height: "100%",
    width: "750px",

  }

  const petrStyle = {
    height: "50px",
    width: "50px",
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
              <Locationfinder />
            </MapContainer>
          </div>
        <div id='card-container' class='wrapper'>
          <div class='card'>
            <form id='form' class='card__form'>
              <h1>Drop Info</h1>
              <label class='card__form__label'>Date</label>
              <input></input>
              <label class='card__form__label'>Time</label>
              <input></input>
              <label class='card__form__label'>Drop Name</label>
              <input></input>
              <label class='card__form__label'>Location Name</label>
              <input></input>
              <button class='submit'>Submit</button>
            </form>
          </div>
        </div>
        </div>
        </div>
      {/* <CurrentDropContainer style={petrStyle} /> */}
    </div>

  );
}

export default FormMap;

