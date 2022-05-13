import React from 'react'

import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const CustomMap = () => {
  const center={latitude: 37.8, longitude: -122.4, zoom: 7};
  const mapboxAccessToken='pk.eyJ1IjoidmxhZHNhbmR1MDMwOCIsImEiOiJjbDM0N2d3MXAwMWQ2M2ttcHAwcGtlN3VrIn0.SCkcnJh088BuTh7CHNpfhw';

  return (
    <Map reuseMaps initialViewState={center} style={{width: '100%', height: '100%'}} mapStyle="mapbox://styles/mapbox/streets-v9"  mapboxAccessToken={mapboxAccessToken}>
      <Marker longitude={-122.4} latitude={37.8} color="red" />
      <Marker longitude={25} latitude={45} color="red" />
    </Map>
  )
}

export default CustomMap