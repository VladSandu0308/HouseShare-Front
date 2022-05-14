import React, {useState} from 'react'

import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const CustomMap = () => {
  const center={latitude: 37.8, longitude: -122.4, zoom: 7};
  const mapboxAccessToken='pk.eyJ1IjoidmxhZHNhbmR1MDMwOCIsImEiOiJjbDM0N2d3MXAwMWQ2M2ttcHAwcGtlN3VrIn0.SCkcnJh088BuTh7CHNpfhw';
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Map reuseMaps initialViewState={center} style={{width: '100%', height: '100%'}} mapStyle="mapbox://styles/mapbox/streets-v9"  mapboxAccessToken={mapboxAccessToken}>
      <Marker longitude={-122.4} latitude={37.8} color="red" onClick={e => {
            e.originalEvent.stopPropagation();
            setShowPopup(true);
          }}/>
      <Marker longitude={25} latitude={45} color="red" />
      {showPopup && (
      <Popup longitude={-122.4} latitude={37.8}
        anchor="top"
        onClose={() => setShowPopup(false)}>
        You are here
      </Popup>)}
    </Map>
  )
}

export default CustomMap