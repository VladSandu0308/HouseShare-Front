import React, {useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import { addDays } from 'date-fns';
import useUser from '../../hooks/useUser';
import { server } from '../../services/axios';

const BookHouse = ({curLoc}) => {

    
  const {user} = useUser();

  const [endDate, setEndDate] = useState();
  const [startDate, setStartDate] = useState();
  const [capacity, setCapacity] = useState();
  const [location, setLocation] = useState();
  const [phone, setPhone] = useState();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    setLocation(curLoc)
  }, [curLoc]);

  const handleSumbit = async (event) => {
    event.preventDefault();
    const starting_date = new Date(startDate.getTime() - (startDate.getTimezoneOffset() * 60000))
            .toISOString().slice(0, 11).replace('T', ' ');
    const ending_date = new Date(endDate.getTime() - (endDate.getTimezoneOffset() * 60000))
            .toISOString().slice(0, 11).replace('T', ' ');
       
    console.log({
      location_id: location,
      starting_date,
      ending_date,
      helped_id: user.user_id
    });

    try {
      setError('');
      setSuccess('');
      await server.post("/makeConnection", {
        location_id: location,
        starting_date,
        ending_date,
        helped_id: user.user_id
      });
      setSuccess('Book request succesfully submited!');

    } catch (e) {
      setError(e.message);
      console.log("Error: " + e);
    }


  }
  
          return (
            
            <form className='my-4 mx-auto flex flex-col' noValidate onClick={handleSumbit}>
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
                  <strong>ID</strong> of accomodation
                </label>
                <input value={curLoc} class="form" id="id" placeholder='Location' onChange={e => setLocation(curLoc)}/>
              </div>
              <div className='mb-8'>
                <label className='block text-black text-sm mb-2' for="start">
                  <strong>Start</strong> of the accomodation period
                </label>
                <DatePicker className="form" selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()} placeholderText="Start Date"/>
              </div>
              <div className='mb-16'>
                <label className='block text-black text-sm mb-2' for="end">
                  <strong>End</strong> of the accomodation period
                </label>
                <DatePicker className="form" selected={endDate} onChange={date => setEndDate(date)} minDate={addDays(startDate, 1)} placeholderText="End Date"/>
              </div>
              
              <button className='bg-primary text-white rounded-xl w-28 mx-auto hover:bg-primary/80 transition-colors duration-300'>
                  Book
              </button>

            </form>
  )
}

export default BookHouse