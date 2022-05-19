import React, { useState, useEffect } from 'react'
import {format} from 'react-string-format';
import useUser from '../hooks/useUser';
import { server } from '../services/axios';
import BipHelped from './Helped/BipHelped';
import BipHelper from './Helper/BipHelper';
import Pagination from './Pagination';

const BookingsInProgress = () => {
  const [bookings, setBokings] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(0);

  const lastIndex = currentPage * perPage;
  const firstIndex = lastIndex - perPage;
  const currentBookings = bookings.slice(firstIndex, lastIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const {user} = useUser();

  const path = user.role === "Helper" ? format(`/helpersgetBookingsInProgress/{0}`, user.user_id) : format(`/helpedBookingsInProgress/{0}`, user.user_id);;

  useEffect(() => {
    server.get(path).then((bookings) => setBokings(bookings.data)).then(() => console.log(bookings)).then(() => setLoading(1));
  }, []);

  if(!loading) {
    return <></>
  }

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
                  {
                    user.role === "Helper" ? (
                      <BipHelper book={book}/>
                    ) : (
                      <BipHelped book={book}/>
                    )
                  }
                
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