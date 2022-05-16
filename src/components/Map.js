import React, {useState, useMemo, useEffect} from 'react'

import Map, {Marker, Popup, useMap} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { server } from '../services/axios';
import { format } from 'react-string-format';

const CustomMap = ({coords, setCurLoc}) => {
  
  const center={latitude: 46, longitude: 26, zoom: 5};
  const [pins, setPins] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      const response = await server.get(format('/helpedGetLocations'));
      setPins(response.data.map((city) => (
        <Marker
          key={`marker-${city.location_id}`}
          longitude={city.longitude}
          latitude={city.latitude}
          onClick={e => {
            // If we let the click event propagates to the map, it will immediately close the popup
            // with `closeOnClick: true`
            e.originalEvent.stopPropagation();
            setShowPopup(city);
            setCurLoc(city.location_id);
          }}
        >
        </Marker>
      )))
      console.log("Pins: " + pins);
    };

    fetchLocations();
  }, []);

  const mapboxAccessToken='pk.eyJ1IjoidmxhZHNhbmR1MDMwOCIsImEiOiJjbDM0N2d3MXAwMWQ2M2ttcHAwcGtlN3VrIn0.SCkcnJh088BuTh7CHNpfhw';
  const [showPopup, setShowPopup] = useState(null);


  

  return (
    <Map reuseMaps initialViewState={center} style={{width: '100%', height: '100%'}} mapStyle="mapbox://styles/mapbox/streets-v9"  mapboxAccessToken={mapboxAccessToken}>
      
      {pins}
      
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
      <Popup longitude={showPopup.longitude} latitude={showPopup.latitude}
        anchor="top"
        onClose={() => setShowPopup(false)}>
        Address: {showPopup.address} 
        <br></br>
        Starting Date : {showPopup.starting_date.slice(0,10)}
        <br></br>
        Ending Date : {showPopup.ending_date.slice(0,10)}
        <br></br>
        Sleeping Capacity : {showPopup.sleeping_capacity}
        <br></br>
        Phone Number : {showPopup.phone}

      </Popup>)}

      
    </Map>
  )
}

export default CustomMap