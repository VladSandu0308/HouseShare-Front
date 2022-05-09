import React, {useState} from 'react'

const BookHouse = () => {

  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [capacity, setCapacity] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState();
  
  return (
            <form className='my-4 mx-auto flex flex-col' noValidate>
              <div className='mb-8'>
                <label className='block text-black text-sm mb-2' for="name">
                  <strong>ID</strong> of accomodation
                </label>
                <input class="form" id="id" placeholder='Location' onChange={e => setLocation(e.target.value)}/>
              </div>
              <div className='mb-8'>
                <label className='block text-black text-sm mb-2' for="phone">
                  <strong>Start</strong> of the accomodation period
                </label>
                <input class="form" id="start" placeholder='Start Date' onChange={e => setStartDate(e.target.value)}/>
              </div>
              <div className='mb-16'>
                <label className='block text-black text-sm mb-2' for="email">
                  <strong>End</strong> of the accomodation period
                </label>
                <input class="form" id="end" type="email" placeholder='End Date' onChange={e => setEndDate(e.target.value)}/>
              </div>
              
              <button className='bg-primary text-white rounded-xl w-28 mx-auto hover:bg-primary/80 transition-colors duration-300'>
                  Book
              </button>

            </form>
  )
}

export default BookHouse