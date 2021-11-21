import Locationfinder  from "./components/Locationfinder";
import CurrentDropContainer from "./components/CurrentDropContainer";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReceiveDrop from "./components/ReceiveDrop";
import './App.css';
import HomePage from './HomePage';
import About from './About';
import NavBar from './NavBar';
import SignIn from './SignIn';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


function App() {
  const style = {
    height: "50vh",
    width: "50vh",
  }

  return (
    <div className="App">
<<<<<<< HEAD
        <Router>
        <NavBar />
          <Routes>
            <Route class= "zotdrop-style" path="/" element = {<HomePage />} />
            <Route class = "about-style" path="/about" element = {<About />} />

            <Route path="/signin" element = {<SignIn />} />
          </Routes>

        </Router>
=======
      <MapContainer center={[33.6461, -117.8427]} zoom={13} scrollWheelZoom={false} style={style} >
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
        {/* <Locationfinder /> */}
        <ReceiveDrop/>
      </MapContainer>

      <CurrentDropContainer />
>>>>>>> 2435a09c6c80c34b01e48b4243d1de686c537dbe
    </div>

  );
}

export default App;

