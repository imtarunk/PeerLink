import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoSchoolOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { USER_API_END_POINT } from '../components/util/endpoint';
import { useDispatch } from 'react-redux';
import { getUser } from '../../../backend/redux/userSlice';
import { IoKeyOutline } from "react-icons/io5";

const Login = () => {
  const [isLogin, setLogin] = useState(false);
  const [isUni, setUni] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false); // State to manage loading

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    if (!isLogin) {
      try {
        const res = await axios.post(
          `${USER_API_END_POINT}/login`,
          { email, password },
          {
            headers: {
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          }
        );

        console.log(res);

        // Dispatch the Redux action to store the user profile
        dispatch(getUser(res?.data?.user));

        if (res.data.success) {
          navigate('/'); // Redirect to home or dashboard
          toast.success(res?.data?.message); // Display success message
        }

      } catch (error) {
        console.error('Login failed:', error);
        toast.error(error.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  const handleUniLoginToggle = () => {
    setUni(!isUni);
    if (!isUni) {
      // Reset fields when switching to University login
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="w-[350px] h-auto bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[10px] p-[20px_30px] pt-[20px] pb-[30px] box-border">
      <p className="text-center font-sans font-extrabold text-[28px] my-[10px] mb-[30px]">Welcome back</p>

      {isUni ? (
        <form className="w-full flex flex-col gap-[18px] mb-[15px]" onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
            placeholder="Password"
          />
          <p className="text-right underline text-gray-500">
            <span className="cursor-pointer font-sans text-[9px] font-bold hover:text-black">Forgot Password?</span>
          </p>
          <button
            className="p-[10px_15px] font-sans rounded-[20px] border-0 outline-none bg-black hover:bg-blue-500 text-white cursor-pointer shadow-md active:shadow-none"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      ) : (
        <form className='space-y-3'>
          <input
            type="password"
            value={password}
            // onChange={(e) => setPassword(e.target.value)}
            className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border w-full"
            placeholder="University id"
          />
          <button
            className="p-[10px_15px] font-sans rounded-[20px] border-0 outline-none w-full bg-[#922b21] border-[#922b21] hover:bg-blue-500 text-white cursor-pointer shadow-md active:shadow-none"
            disabled={isLoading} // Disable button when loading
          >
            {isLoading ? 'Logging in...' : 'Log in'}
          </button>
        </form>
      )}
      <p className="text-[10px] text-gray-500 font-sans">
        Don't have an account?
        <Link to='/signup'>
          <span className="ml-[1px] text-[11px] text-teal-500 font-bold cursor-pointer no-underline">Sign up</span>
        </Link>
      </p>
      <div className="w-full flex flex-col justify-start mt-[20px] gap-[15px]">
        {isUni ? (<div
          className="bg-[#922b21] text-white border-2 border-[#922b21] rounded-[20px] p-[10px_15px] flex justify-center items-center cursor-pointer shadow-md gap-[5px] hover:shadow-lg active:shadow-none transform active:scale-95 transition-transform duration-200"
          onClick={handleUniLoginToggle}
        >
          <IoSchoolOutline size={'20px'} />
          <span>Log in with University</span>
        </div>) : (<div
          className="bg-black text-white border-2 border-[#000000] rounded-[20px] p-[10px_15px] flex justify-center items-center cursor-pointer shadow-md gap-[5px] hover:shadow-lg active:shadow-none transform active:scale-95 transition-transform duration-200"
          onClick={handleUniLoginToggle}
        >
          <IoKeyOutline size={'20px'} />
          <span>Login with Email & Password</span>
        </div>)}

        <div className="border-2 border-gray-500 rounded-[20px] p-[10px_15px] flex justify-center items-center cursor-pointer shadow-md gap-[5px] hover:shadow-lg active:shadow-none transform active:scale-95 transition-transform duration-200">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className="text-[18px] mb-[1px]" viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>Log in with Google</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
