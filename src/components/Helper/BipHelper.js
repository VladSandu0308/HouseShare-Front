import React, {useState} from 'react'
import xCross from '../../pictures/xcross.png';
import check from '../../pictures/check.png';
import useUser from '../../hooks/useUser';
import { server } from '../../services/axios';
import { useNavigate } from 'react-router-dom';

const BipHelper = ({book}) => {
  const {user} = useUser();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleAccept = async (event) => {
    event.preventDefault();
    console.log({
      connections_id: book.connections_id
    });

    try {
      setError('');
      setSuccess('');
      await server.post("/helperAcceptBookings", {
        connections_id: book.connections_id,
      });
      setSuccess('Request succesfully accepted!');
      navigate("/home");
    } catch (e) {
      setError(e.message);
    }
  };

  const handleReject = async (event) => {
    event.preventDefault();
    console.log({
      connections_id: book.connections_id
    });

    try {
      setError('');
      setSuccess('');
      await server.post("/helperRefuseBookings", {
        connections_id: book.connections_id,
      });
      setSuccess('Request succesfully rejected!');
      window.location.reload();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div class="accordion-body py-2 px-5 text-sm flex justify-between">
    
      <div className='flex flex-col ml-4 my-auto gap-1'>
          <h5>Name: </h5>
          <h5>Start Date: </h5>
          <h5>End Date: </h5>
      </div>
      <div className='flex flex-col my-auto gap-1'>
          <h5>Phone: </h5>
      </div>
      <div className='flex flex-row gap-4 my-auto mr-4'>
        <button className='w-9 h-9 m-auto rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-300' onClick={handleAccept}>
          <img className='m-auto w-5' src={check} />
        </button>
        <button className='w-9 h-9 m-auto rounded-full bg-secondary hover:bg-secondary/80 transition-colors duration-300' onClick={handleReject}>
          <img className='m-auto w-5' src={xCross} />
        </button>
      </div>
    </div>
    
  )
}

export default BipHelper