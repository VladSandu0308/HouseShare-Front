import React, {useState} from 'react'

import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const CustomMap = ({coords}) => {
  
  const center={latitude: 45, longitude: 26, zoom: 5};

  console.log("dddd" + coords)
  
  const mapboxAccessToken='pk.eyJ1IjoidmxhZHNhbmR1MDMwOCIsImEiOiJjbDM0N2d3MXAwMWQ2M2ttcHAwcGtlN3VrIn0.SCkcnJh088BuTh7CHNpfhw';
  const [showPopup, setShowPopup] = useState(true);

  return (
    <Map reuseMaps initialViewState={center} style={{width: '100%', height: '100%'}} mapStyle="mapbox://styles/mapbox/streets-v9"  mapboxAccessToken={mapboxAccessToken}>
      <Marker longitude={-122.4} latitude={37.8} color="red" onClick={e => {
            e.originalEvent.stopPropagation();
            setShowPopup(true);
      }}/>
      {
        coords && (
          <Marker longitude={coords[0]} latitude={coords[1]} color="red" />
        )
      }
      
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