import { getAuth } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../pictures/logo.png';

const Home = () => {
  const {currentUser} = getAuth();
  const navigate = useNavigate();
  console.log(currentUser);
  return (
    <div className='w-screen h-screen grid grid-rows-15'>
      <div className='flex flex-row'>
        <nav class="basis-full flex items-center flex-wrap">
          <div class="flex items-center flex-shrink-0 text-white mr-6 ml-6">
            <img className='w-8' src={logo} alt='logo'/>
          </div>
          <div class="w-full block flex-grow flex items-center w-auto">
            <div class="text-sm flex-grow">
              <button class="block mt-4 inline-block mt-0 text-[#F1F7ED] hover:text-[#F1F7ED]/70 mr-4  transition-colors duration-300">
                Map
              </button>
              <button class="block mt-4 inline-block mt-0 text-[#F1F7ED] hover:text-[#F1F7ED]/70 mr-4  transition-colors duration-300">
                Bookings
              </button>
              <button class="block mt-4 inline-block mt-0 text-[#F1F7ED] hover:text-[#F1F7ED]/70  transition-colors duration-300" onClick={() => navigate("/progress", {state: {name: "Bookings In Progress"}})}>
                In Progress
              </button>
            </div>
            <div className='mr-4'>
              <span class="font-semibold text-xl tracking-tight text-[#FCFFFB] mr-6">Home</span>
              <button className='text-md mr-2 bg-[#FCFFFB] text-primary rounded-xl px-4 py-0.5 rounded-full hover:bg-[#FCFFFB]/80  transition-colors duration-300'>Log Out</button>
            </div>
          </div>
        </nav>
      </div>
      <div className='row-span-10 bg-secondary grid grid-cols-4'>
        <div className='my-8 mx-20 col-span-3 bg-white flex'>
          <div className='m-auto'>
            <div className='bg-white'>
              Map placeholder
            </div>
          </div>
        </div>

        <div className='flex'>
          <div className='m-auto'>
            <button className='mr-16 bg-[#FCFFFB] text-primary rounded-xl w-60 h-12 rounded-full hover:bg-[#FCFFFB]/80  transition-colors duration-300'>
              See Map
            </button>
          </div>
        </div>
      </div>
      <div className='row-span-4 flex'>
        <div className='m-auto flex flex-col'>
          <h1 className='mb-4 mx-auto test-3xl font-bold font-sans text-white'>
            Do you need help and don’t know where to find it?
          </h1>
          <button className='mx-auto bg-secondary text-white rounded-xl w-60 h-12 rounded-full hover:bg-secondary/80 transition-colors duration-300' onClick={() => navigate("/usefulInfo", {state: {name: "Useful Information"}})}>
            See useful resources
          </button>
        </div>
      </div>
      

    </div>
  )
}

export default Home