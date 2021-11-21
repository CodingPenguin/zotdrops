import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'

function Locationfinder() {
    const [data, setData] = useState([[51.509, -0.09]]);
    const map = useMapEvent('click', (e) => {
      console.log(e.latlng);
      //send request to server
      setData([...data, e.latlng]);
      //send e.latlng to server
      // fetch(serverUrl + '/addDrop?lat=' + 50 + 'lng=' + 23)
    })
    function hi(e) {
      return <Marker key={e[0]} position={e}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
    }
    return <>
        {data.map(hi)}
    </>
  }

  export default Locationfinder;