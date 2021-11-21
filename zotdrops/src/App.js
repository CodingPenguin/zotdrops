import Locationfinder  from "./components/Locationfinder";
import CurrentDropContainer from "./components/CurrentDropContainer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReceiveDrop from "./components/ReceiveDrop";
import './App.css';


function App() {
  const style = {
    height: "50vh",
    width: "50vh",

  }

  const petrStyle = {
    height: "50px",
    width: "50px",
  }

  return (
    <div className="App">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={style} >
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
        <ReceiveDrop/>
      </MapContainer>

      <CurrentDropContainer style={petrStyle} />
    </div>

  );
}

export default App;

