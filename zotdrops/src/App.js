import Locationfinder  from "./components/Locationfinder";
import CurrentDropContainer from "./components/CurrentDropContainer";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReceiveDrop from "./components/ReceiveDrop";
import './App.css';
import HomePage from './HomePage';
import About from './About';
import NavBar from './NavBar';
import SignIn from './SignIn';
import FormMap from "./FormMap";
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

  const petrStyle = {
    height: "50px",
    width: "50px",
  }

  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
            <Route class= "zotdrop-style" path="/" element = {<HomePage />} />
            <Route class = "about-style" path="/about" element = {<About />} />
            <Route class = "about-style" path = "/form" element = {<FormMap />} />
            <Route path="/signin" element = {<SignIn />} />
          </Routes>

        </Router>
    </div>

  );
}

export default App;

