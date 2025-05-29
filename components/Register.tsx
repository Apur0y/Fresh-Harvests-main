import React, { useState } from 'react';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { FcGoogle } from 'react-icons/fc';

import { useRegisterUserMutation } from '@/redux/api/userApi';
import toast from 'react-hot-toast';


interface LoginProps {
  setView: React.Dispatch<React.SetStateAction<boolean>>;
}



export default function Register({ setView }: LoginProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [register, { isLoading }] = useRegisterUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await register(formData).unwrap();
      
      if (response.success) {
        toast.success(response.message || 'Registration successful!');
        // Redirect to login or dashboard
      } else {
        toast.error(response.message || 'Registration failed');
      }
    } catch (err: any) {
      toast.error(err.data?.message || err.message || 'Registration failed');
    }
  };

  return (
   <div className="bg-white flex flex-col gap-4 text-gray-800">
        <h1 className="text-center text-2xl font-bold">Register</h1>
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
           <div className="flex flex-col">
            <label>Full Name</label>
            <input
            onChange={handleChange}
              type="text"
              name='fullName'
              placeholder="Enter your email"
              className="p-3 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
            onChange={handleChange}
              type="email"
              name='email'
              placeholder="Enter your email"
              className="p-3 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>
  
          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="password"
               onChange={handleChange}
               name='password'
              placeholder="Enter your password"
              className="p-3 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>
  
         
  
          <button  className="button-main">
            Register
          </button>
        </form>
  
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-500">Or Sign in with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
  
        <div className="w-full flex justify-center gap-4">
     
          <button
            className="
      w-1/2 py-2 px-4 border-2 border-gray-300 rounded-lg
      flex items-center justify-center gap-2
      text-gray-700 font-medium
      hover:bg-gray-50 hover:border-gray-400
      transition-colors duration-200
      shadow-sm hover:shadow-md
    "
          >
            <FcGoogle className="text-xl" />
            <span>Google</span>
          </button>
  
         
          <button
            className="
      w-1/2 py-2 px-4 border-2 border-gray-300 rounded-lg
      flex items-center justify-center gap-2
      text-blue-600 font-medium
      hover:bg-blue-50
      transition-colors duration-200
      shadow-sm hover:shadow-md
    "
          >
            <BiLogoFacebookCircle className="text-xl border-gray-300" />
            <span>Facebook</span>
          </button>
        </div>
  
        <div className="flex gap-1 justify-center ">
          <p className='font-semibold'> Already have an account? </p>
          <button
          
          onClick={()=>{
            setView(true)
          }}
          className="text-[#FF6A1A] cursor-pointer">Sign in</button>
        </div>
      </div>
  );
}