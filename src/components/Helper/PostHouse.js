import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';

const PostHouse = () => {
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [capacity, setCapacity] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState();

  return (
            <form className='my-4 mx-auto flex flex-col' noValidate>
              <div className='mb-8'>
                <label className='block text-black text-sm mb-2' for="name">
                  <strong>Location</strong> of accomodation
                </label>
                <input class="form" id="name" placeholder='Location' onChange={e => setLocation(e.target.value)}/>
              </div>
              <div className='mb-8'>
                <label className='block text-black text-sm mb-2' for="start">
                  <strong>Start</strong> of the accomodation period
                </label>
                <DatePicker className="form" selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} placeholderText="Start Date"/>
              </div>
              <div className='mb-8'>
                <label className='block text-black text-sm mb-2' for="email">
                  <strong>End</strong> of the accomodation period
                </label>
                <DatePicker className="form" selected={endDate} onChange={date => setEndDate(date)} minDate={addDays(startDate, 1)} placeholderText="End Date"/>
              </div>
              <div className='mb-8'>
                <label className='block text-black text-sm mb-2' for="password">
                  <strong>Sleeping Capacity</strong>
                </label>
                <input class="form appearance-none" id="password" type="number" min="1" max="16" placeholder='Capacity' onChange={e => setCapacity(e.target.value)}/>
              </div>
              <div className='mb-16'>
                <label className='block text-black text-sm mb-2' for="phone">
                  <strong>Phone</strong> number
                </label>
                <input class="form" id="phone" placeholder='Phone' onChange={e => setPhone(e.target.value)}/>
              </div>

              <button className='bg-primary text-white rounded-xl w-28 mx-auto hover:bg-primary/80 transition-colors duration-300'>
                  Submit
              </button>

            </form>
  )
}

export default PostHouse