
import React, { useState, useEffect } from 'react'
import {format} from 'react-string-format';
import Pagination from '../Pagination';

import { server } from '../../services/axios';
import useUser from '../../hooks/useUser';


const MyBookings = () => {
  const [bookings, setBokings] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentBookings = bookings.slice(firstIndex, lastIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const {user} = useUser();

  useEffect(() => {
    server.get(format('/getHelpersBookings/{0}', user.user_id)).then((bookings) => setBokings(bookings.data));
  }, []);


  return (
    <div>
      <div class="accordion" id="accordionExample">
        {
          currentBookings.map((book) => (
            <div class="accordion-item bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="headingOne">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none;"
                  type="button" data-bs-toggle="collapse" data-bs-target={format('#id{0}', book.connections_id)} aria-expanded="false"
                  aria-controls="collapseOne">
                  Connection {book.connections_id} - Location: {book.address}
                </button>
              </h2>
              <div id={format('id{0}', book.connections_id)} class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                  <div class="accordion-body py-2 px-5 text-sm flex justify-between">
      
                    <div className='flex flex-col ml-4 my-auto gap-1'>
                        
                        <h5>Start Date: {book.starting_date.slice(0,10)}</h5>
                        <h5>End Date: {book.ending_date.slice(0,10)}</h5>
                        <h5>Helped's name: {book.name}</h5>
                    </div>
                    <div className='flex flex-col my-auto gap-1'>
                        <h5>Location: {book.address} </h5>
                        <h5>Helped's phone number: {book.phone}</h5>
                    </div>
                    <div className='flex flex-row gap-4 my-auto mr-4'>
                      
                    </div>
                  </div>
                
              </div>
            </div>
          ))
        } 
      </div>
      <Pagination perPage={perPage} totalPosts={bookings.length} paginate={paginate} currentPage={currentPage}/>
    </div>
  )
}

export default MyBookings