import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet'

function Inside() {
    const map = useMapEvents({
        click() {
          map.locate()
        },
        locationfound(e) {
          console.log(e.latlng)
        },
      })
    return <div></div>
}

export default Inside;