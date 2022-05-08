import React, { useState } from 'react'
import {format} from 'react-string-format';
import Pagination from './Pagination';

const BookingsInProgress = () => {
  const [bookings, setBokings] = useState([{id: 1}, {id: 2},{id: 1}, {id: 2},{id: 1}, {id: 2},{id: 1}, {id: 2},]);
  const [perPage, setPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentBookings = bookings.slice(firstIndex, lastIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div>
      <div class="accordion" id="accordionExample">
        {
          currentBookings.map((book) => (
            <div class="accordion-item bg-white border border-gray-200">
              <h2 class="accordion-header mb-0" id="headingOne">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none;"
                  type="button" data-bs-toggle="collapse" data-bs-target={format('#id{0}', book.id)} aria-expanded="false"
                  aria-controls="collapseOne">
                  {book.id}
                </button>
              </h2>
              <div id={format('id{0}', book.id)} class="accordion-collapse collapse" aria-labelledby="headingOne"
                data-bs-parent="#accordionExample">
                <div class="accordion-body py-4 px-5">
                  <strong>Link:</strong> 
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

export default BookingsInProgress