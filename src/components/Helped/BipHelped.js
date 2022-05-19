import React, {useState} from 'react'
import { Navigate } from 'react-router-dom';
import garbage from '../../pictures/garbage.png';
import { server } from '../../services/axios';

const BipHelped = ({book}) => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleDelete = async (event) => {
    event.preventDefault();
    console.log({
      connections_id: book.connections_id
    });

    try {
      setError('');
      setSuccess('');
      await server.post("/helpedDeleteConnection", {
        connections_id: book.connections_id,
      });
      setSuccess('Request succesfully delete!');
      window.location.reload();

    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div class="accordion-body py-2 px-5 text-sm flex justify-between">
      
      <div className='flex flex-col ml-4 my-auto gap-1'>
          <h5>Id: {book.connections_id}</h5>
          <h5>Start Date: {book.starting_date.slice(0,10)} </h5>
          <h5>End Date: {book.ending_date.slice(0,10)}</h5>
      </div>
      <div className='flex flex-col my-auto gap-1'>
          <h5>Helper's name: {book.name} </h5>
          <h5>Helper's phone: {book.phone} </h5>
          <h5>Location:  {book.address}</h5>
      </div>
      <div className='flex flex-row gap-4 my-auto mr-4'>
        <button className='w-9 h-9 m-auto rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-300' 
          onClick={handleDelete}>
          <img className='m-auto w-5' src={garbage} />
        </button>
      </div>
    </div>
  )
}

export default BipHelped