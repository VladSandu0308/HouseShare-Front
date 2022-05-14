import React from 'react'
import garbage from '../../pictures/garbage.png';

const BipHelped = ({book}) => {
  return (
    <div class="accordion-body py-2 px-5 text-sm flex justify-between">
      
      <div className='flex flex-col ml-4 my-auto gap-1'>
          <h5>Id: </h5>
          <h5>Start Date: </h5>
          <h5>End Date: </h5>
      </div>
      <div className='flex flex-col my-auto gap-1'>
          <h5>Status: </h5>
          <h5>Phone: </h5>
          <h5>Location: </h5>
      </div>
      <div className='flex flex-row gap-4 my-auto mr-4'>
        <button className='w-9 h-9 m-auto rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-300' onClick={() => {}}>
          <img className='m-auto w-5' src={garbage} />
        </button>
      </div>
    </div>
  )
}

export default BipHelped