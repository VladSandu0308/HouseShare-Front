import React, { useState } from 'react';
import logo from '../pictures/logo.png';
import { useNavigate } from 'react-router-dom';

import GoogleButton from 'react-google-button';
import { useAuth } from '../context/UserAuthContext';
import { server } from '../services/axios';


const Register = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [role, setRole] = useState();
  
  const [error, setError] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const { signup, google } = useAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log({
      email,
      password
    });

    try {
      setError('');
      setSuccess('');
      setLoading(true);
      await signup(email, password, name);
      // await server.post("/register", {
      //   email, phone, name, role
      // });
      setSuccess('You can login now!');
      navigate("/login");

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
            Already have an account?
          </h2>
          <button className='ml-12 bg-white text-primary rounded-xl w-32 hover:bg-white/80 transition-colors duration-300' onClick={() => navigate("/login")}>
            Sign In
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
                <p class="font-bold">Registration Succesful</p>
                <p class="text-sm">{success}</p>
              </div>
            }
            <h1 className='mx-auto mt-4 text-3xl font-sans font-bold text-primary'>
              Sign Up
            </h1>
            <form className='my-4 mx-auto ' noValidate onSubmit={handleRegister}>
              <div className='mb-4'>
                <label className='block text-primary text-sm mb-2' for="name">
                  Full Name
                </label>
                <input class="form" id="name" placeholder='Enter your real name' onChange={e => setName(e.target.value)}/>
              </div>
              <div className='mb-4'>
                <label className='block text-primary text-sm mb-2' for="phone">
                  Phone Number
                </label>
                <input class="form" id="phone" placeholder='Enter your phone number' onChange={e => setPhone(e.target.value)}/>
              </div>
              <div className='mb-4'>
                <label className='block text-primary text-sm mb-2' for="email">
                  Email
                </label>
                <input class="form" id="email" type="email" placeholder='Enter your email' onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className='mb-4'>
                <label className='block text-primary text-sm mb-2' for="password">
                  Password
                </label>
                <input class="form appearance-none" id="password" type="password" placeholder='Enter your password' onChange={e => setPassword(e.target.value)}/>
              </div>
              <div className='mb-6'>
                <label className='block text-primary text-sm mb-2' for="role">
                  Role
                </label>
                <select class="form" id="role" placeholder='Enter your real name' onChange={e => setRole(e.target.value)}>
                  <option>Helper</option>
                  <option>Helped</option>
                </select>
              </div>

              <div className='ml-16 mb-4'>
                <button className='bg-primary text-white rounded-xl w-28 hover:bg-primary/80 transition-colors duration-300'>
                  Sign Up
                </button>
              </div>
              {/* <div className='ml-7'>
                <button type="button" class="text-gray-500 bg-white hover:bg-white/80 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg 
                text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2" onClick={() => google().then(setTimeout(() => navigate("/home"), 3000))}>
                  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                    Sign in with Google
                </button>
              </div> */}
            </form>
          </div>
        </div>
      
    </div>
  )
}

export default Register