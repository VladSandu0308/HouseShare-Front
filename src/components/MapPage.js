import React, {useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../pictures/logo.png';
import BookHouse from './Helped/BookHouse';
import PostHouse from './Helper/PostHouse';
import CustomMap from './Map'

import Map, {Marker, Popup} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapPage = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  

 
  return (
    <div className='grid grid-cols-2 w-screen h-screen bg-primary'>
      
      <div className='bg-white my-4 ml-4 flex'>
        <div className='bg-gray-400 w-full h-full relative'>

          <CustomMap />

          <div className='w-12 h-12 ml-2 mt-2 absolute inset-0 rounded-full bg-secondary shadow-3xl flex z-10'>
              <button className='w-9 h-9 m-auto rounded-full bg-[#FCFFFB] hover:bg-[#FCFFFB]/80 transition-colors duration-300' onClick={() => navigate("/home")}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto" fill="none" viewBox="0 0 26 24" stroke="#0B5351" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
          </div>

        </div>
        

      </div>    
    
        

      <div className='bg-secondary my-4 mr-4 flex'>
        <div className="text-white relative right-8 mt-4">
          <img className='w-16' src={logo} alt='logo'/>
        </div>

        <div className='m-auto'>
          {
            state.role == "Helper" ? (
              <PostHouse />
            ) : (
              <BookHouse />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default MapPage