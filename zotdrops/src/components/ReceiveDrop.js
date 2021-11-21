import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import axios from 'axios';

function ReceiveDrop() {
    const [positions, setPositions] = useState([]);
    useEffect(getUpdatedPositions, [])

    function getUpdatedPositions(){
        axios.get('http://127.0.0.1:5000/drops')
        .then((response) => {
          console.log(response)
        })
        let serverData = [[0, 0]];
        setPositions(serverData);
       

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