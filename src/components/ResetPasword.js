import React, { useState } from 'react';
import logo from '../pictures/logo.png';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/UserAuthContext';


const ResetPasword = () => {
  const [email, setEmail] = useState();
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { resetPassword } = useAuth();

  const handleReset = async (event) => {
    event.preventDefault();
    console.log({
      email
    });

    try {
      setError('');
      setSuccess('');
      setLoading(true);
      await resetPassword(email);
      setSuccess('Check your inbox for further instructions!');
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
    
  };


  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen grid grid-cols-4">
        <div className='m-auto'>
          <div className='mb-8'>
            <img className='w-56' src={logo} alt='logo'/>
          </div>
          <h2 className='mb-4 ml-5 test-xl font-sans text-white'>
            You don't have an accout?
          </h2>
          <button className='ml-12 bg-white text-primary rounded-xl w-32 hover:bg-white/80 transition-colors duration-300' onClick={() => navigate("/")}>
            Sign Up
          </button>
        </div>
        <div className='m-2 col-span-3 bg-secondary flex'>
          
          <div className='m-auto flex flex-col'>
            { error && 
            
              <div class="mt-2 bg-red-100 border-t-4 border-red-400 rounded-b text-red-900 px-4 py-3 shadow-md" role="alert">
                <p class="font-bold">Something went wrong</p>
                <p class="text-sm">{error}</p>
              </div>
            }
            { success && 
            
              <div class="mt-2 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                <p class="font-bold">Email Sent</p>
                <p class="text-sm">{success}</p>
              </div>
            }
            <h1 className='mx-auto mt-4 text-3xl font-sans font-bold text-primary'>
              Reset Password
            </h1>
            <form className='my-4 mx-auto ' noValidate onSubmit={handleReset}>
              
              <div className='mb-12'>
                <label className='block text-primary text-sm mb-2' for="email">
                  Email
                </label>
                <input class="form" id="email" type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)}/>
              </div>
              

              <div className='ml-8 mb-4'>
                <button className='bg-primary text-white rounded-xl w-44 hover:bg-primary/80 transition-colors duration-300'>
                  Reset
                </button>
              </div>
              
            </form>
          </div>
        </div>
      
    </div>
  )
}

export default ResetPasword