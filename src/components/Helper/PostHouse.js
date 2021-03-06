import React, {useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';

import { server } from '../../services/axios';
import useUser from '../../hooks/useUser';
import useInput from '../../hooks/useInput';

const PostHouse = ({setCoords, coords}) => {
  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [capacity, setCapacity] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const {user} = useUser();
  const address = useInput("");


  console.log("Address: " + address.suggestions[0] )

  const handleSumbit = async (event) => {
    event.preventDefault();
    const starting_date = new Date(startDate.getTime() - (startDate.getTimezoneOffset() * 60000))
            .toISOString().slice(0, 11).replace('T', ' ');
    const ending_date = new Date(endDate.getTime() - (endDate.getTimezoneOffset() * 60000))
            .toISOString().slice(0, 11).replace('T', ' ');
       
    console.log({
      address: location,
      starting_date,
      ending_date,
      phone,
      sleeping_capacity: capacity,
      helper_id: user.user_id,
      longitude: coords[0],
      latitude: coords[1]
    });

    try {
      setError('');
      setSuccess('');
      await server.post("/registerLocation", {
        address: location,
        starting_date,
        ending_date,
        phone,
        sleeping_capacity: capacity,
        helper_id: user.user_id,
        longitude: coords[0],
        latitude: coords[1]
      });
      setSuccess('Adress succesfully submited!');

    } catch (e) {
      setError(e.message);
      console.log("Error: " + e);
    }


  }



          return (
            
            <form className='my-4 mx-auto flex flex-col' noValidate onSubmit={handleSumbit}>
            
              { error && 
            
                <div class="mb-4 bg-red-100 border-t-4 border-red-400 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                  <p class="font-bold">Something went wrong</p>
                  <p class="text-sm">{error}</p>
                </div>
              }
              { success && 
              
                <div class="mb-4 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                  <p class="font-bold">Operation Succesful</p>
                  <p class="text-sm">{success}</p>
                </div>
              }
              <div className='mb-8'>
                <label className='block text-black text-sm mb-2' for="name">
                  <strong>Location</strong> of accomodation
                </label>
                <input value={location} class="form" id="name" placeholder='Location' onChange={e => {setLocation(e.target.value); address.onChange(e);}}/>
                {
                    address.suggestions?.length > 0 && (
                      <div className='bg-white absolute w-96 py-4 px-1 z-10'>
                        {
                          address.suggestions.map((suggestion, index) => {
                            return (
                              <p className='cursor-pointer max-w-96 py-1 text-xs' key={index} onClick={() => {
                                address.setValue(suggestion.place_name);
                                address.setSuggestions([]);
                                setLocation(suggestion.place_name);
                                setCoords(suggestion.center);
                              }} >
                                {suggestion.place_name}
                              </p>
                            )
                          })
                        }
                      </div>
                    )
                }
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