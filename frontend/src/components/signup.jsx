import React, { useState } from 'react'
import { Link, redirect } from 'react-router-dom'
import toast from "react-hot-toast";
import axios from 'axios';
import { USER_API_END_POINT } from '../components/util/endpoint'
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";




const Signup = () => {
  const [isSignup, setSignup] = useState(true)
  const [isLogin, setIsLogin] = useState(true)
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState('Male');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();


  const handleJoin = async (e) => {
    e.preventDefault();

    if (isSignup === true && password === confirmpassword) {
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, { fullname, gender, email, password }, {
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        })
        if (res.data.success) {
          setSignup(true);
          if (res.data.success) {
            toast.success(res.data.message)
          }
          navigate("/login")
        }

      } catch (error) {
        if (error.response) {
          console.log("Server responded with a status:", error.response.status);
          console.log("Error response data:", error.response.data);  // Log the exact server error message
        } else if (error.request) {
          console.log("No response received:", error.request);
        } else {
          console.log("Error setting up the request:", error.message);
        }
      }
    } else {
      console.log("Password and Confirm Password must be the same");
    }

  }

  const SignupHandler = () => {
    setSignup(true);
    // console.log(isSignup);
  }
  const handleGender = (event) => {
    setGender(event.target.value);
  };
  return (
    <div className="w-[350px] h-auto bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[10px] p-[20px_30px] pt-[20px] pb-[30px] box-border">
      <p className="text-center font-sans font-extrabold text-[28px] my-[10px] mb-[30px]">Join our Peer</p>
      <form className="w-full flex flex-col gap-[18px] mb-[15px]" onSubmit={handleJoin}>
        <input
          type="name"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          placeholder="Full name"
        />
        <select
          id="mySelect"
          value={gender}
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          onChange={handleGender}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <input
          type="text"
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          placeholder="Confirm password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="p-[10px_15px] font-sans rounded-[20px] border-0 outline-none bg-black hover:bg-blue-500 text-white cursor-pointer shadow-md active:shadow-none" onClick={SignupHandler}>
          Join
        </button>

      </form>
      <p className="text-[10px] text-gray-500 font-sans">
        <Link to="/login">
          <span className="ml-[1px] text-[14px]  text-teal-500 font-bold cursor-pointer no-underline ">Already have account Sigin ?</span></Link>

      </p>
    </div >
  )
}
export default Signup;