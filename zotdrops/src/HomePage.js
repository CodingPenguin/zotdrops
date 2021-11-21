import React from "react";
import DatesCalendar from './DatesCalendar';
import About from './About';
import AreYouPetr from './AreYouPetr';
import LiveDrop from './LiveDrop';
import Locationfinder  from "./components/Locationfinder";
import CurrentDropContainer from "./components/CurrentDropContainer";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReceiveDrop from "./components/ReceiveDrop";

function HomePage() {
    return (
        <div>
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

            <CurrentDropContainer style={petrStyle} />
            <LiveDrop />
            <DatesCalendar />
            <About />
            <AreYouPetr />
        </div>
    )
}

export default HomePage;