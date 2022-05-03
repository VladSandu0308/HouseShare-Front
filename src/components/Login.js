import React from 'react'
import logo from '../pictures/logo.png';

import GoogleButton from 'react-google-button';


const Login = () => {
  console.log(logo);
  return (
    <div className="w-screen h-screen grid grid-cols-4">
        <div className='m-auto'>
          <div className='mb-8'>
            <img className='w-56' src={logo} alt='logo'/>
          </div>
          <h2 className='mb-4 ml-5 test-xl font-sans text-white'>
            Already have an account?
          </h2>
          <button className='ml-12 bg-white text-primary rounded-xl w-32 hover:bg-white/80'>
            Sign In
          </button>
        </div>
        <div className='m-2 col-span-3 bg-secondary flex'>
          <div className='m-auto'> 
            <h1 className='mt-4 ml-16 text-3xl font-sans font-bold text-primary'>
              Sign Up
            </h1>
            <form className='my-4 mx-auto '>
              <div className='mb-4'>
                <label className='block text-primary text-sm mb-2' for="name">
                  Full Name
                </label>
                <input class="form" id="name" placeholder='Enter your real name'/>
              </div>
              <div className='mb-4'>
                <label className='block text-primary text-sm mb-2' for="phone">
                  Phone Number
                </label>
                <input class="form" id="phone" placeholder='Enter your phone number'/>
              </div>
              <div className='mb-4'>
                <label className='block text-primary text-sm mb-2' for="email">
                  Email
                </label>
                <input class="form" id="email" type="email" placeholder='Enter your email'/>
              </div>
              <div className='mb-4'>
                <label className='block text-primary text-sm mb-2' for="password">
                  Password
                </label>
                <input class="form appearance-none" id="password" type="password" placeholder='Enter your password'/>
              </div>
              <div className='mb-6'>
                <label className='block text-primary text-sm mb-2' for="role">
                  Role
                </label>
                <select class="form" id="role" placeholder='Enter your real name'>
                  <option>Host</option>
                  <option>Guest</option>
                </select>
              </div>

              <div className='ml-16 mb-4'>
                <button className='bg-primary text-white rounded-xl w-28 hover:bg-primary/80'>
                  Sign Up
                </button>
              </div>
              <div className='ml-7'>
                <button type="button" class="text-gray-500 bg-white hover:bg-white/80 focus:ring-4 focus:outline-none focus:ring-white/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                  <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      
    </div>
  )
}

export default Login