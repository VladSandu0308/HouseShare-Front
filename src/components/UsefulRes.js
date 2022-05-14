import React from 'react'
import logo from '../pictures/logo.png';
import Info from './Info';
import { useLocation, useNavigate } from 'react-router-dom';
import BookingsInProgress from './BookingsInProgress';
import MyBookings from './Helper/MyBookings';
import PastBookings from './Helped/PastBookings';

const UsefulRes = () => {
  const navigate = useNavigate();
  const {state} = useLocation();

  const pageName = state.name;

  return (
    <div className='w-screen h-screen grid grid-rows-15'>
  
      <div className='flex justify-between'>
        <div className='w-12 h-12 my-auto ml-4 relative top-5 rounded-full bg-secondary shadow-3xl flex'>
          <button className='w-9 h-9 m-auto rounded-full bg-[#FCFFFB] hover:bg-[#FCFFFB]/80 transition-colors duration-300' onClick={() => navigate("/home")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto" fill="none" viewBox="0 0 26 24" stroke="#0B5351" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className='my-auto'>
          <span class="font-semibold text-lg tracking-tight text-[#FCFFFB] mr-6">{state.name}</span>
        </div>
      </div>

      <div className='bg-secondary row-span-13 flex pb-2'>
        <div className='my-auto w-screen flex flex-col'>
          <div className="mx-auto text-white relative top-8">
            <img className='w-16' src={logo} alt='logo'/>
          </div>
          <div className='mx-16 bg-primary pt-12 p-6 pb-4'>
            {/* To Add if Role */}
            {state.name == "Useful Information" ?
              (<Info />) :
              <>
                {pageName == "Bookings In Progress" ? (
                  <BookingsInProgress />
                ) : <> 
                  {
                    pageName == "My Bookings" ? (
                      <MyBookings />
                    ) : (
                      <PastBookings />
                    )
                  }
                </>
                
              }
              </>
                
            }

            

          </div>
        </div>
      </div>
    </div>
  )
}

export default UsefulRes