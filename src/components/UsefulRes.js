import React from 'react'
import logo from '../pictures/logo.png';
import Info from './Info';

const UsefulRes = () => {
  return (
    <div className='w-screen h-screen grid grid-rows-15'>
  
      <div className='flex justify-between'>
        <div className='w-8 h-8 my-auto ml-4 relative top-5 rounded-full bg-secondary shadow-3xl flex'>
          <button className='w-6 h-6 m-auto rounded-full bg-[#FCFFFB] hover:bg-[#FCFFFB]/80 transition-colors duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-auto" fill="none" viewBox="0 0 26 24" stroke="#0B5351" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <div className='my-auto'>
          <span class="font-semibold text-xl tracking-tight text-[#FCFFFB] mr-6">Placeholder</span>
        </div>
      </div>

      <div className='bg-secondary row-span-13 flex '>
        <div className='m-auto w-screen flex flex-col'>
          <div className="mx-auto text-white relative top-8">
            <img className='w-16' src={logo} alt='logo'/>
          </div>
          <div className='mx-16 bg-primary pt-10 p-6 pb-8'>
            <Info />

          </div>
        </div>
        {/* <div class="mx-auto text-white mr-6 ml-6">
          <img className='w-8' src={logo} alt='logo'/>
        </div>
        <div className='m-auto flex'>
          
          <div className='m-auto pt-8 p-4 bg-primary'>
              Map placeholder
            
          </div>
        </div> */}

      </div>
    </div>
  )
}

export default UsefulRes