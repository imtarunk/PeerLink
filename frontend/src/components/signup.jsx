import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="w-[350px] h-auto bg-white shadow-[0_5px_15px_rgba(0,0,0,0.35)] rounded-[10px] p-[20px_30px] pt-[20px] pb-[30px] box-border">
      <p className="text-center font-sans font-extrabold text-[28px] my-[10px] mb-[30px]">Join our Peer</p>
      <form className="w-full flex flex-col gap-[18px] mb-[15px]">
        <input
          type="name"
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          placeholder="Full name"
        />
        <select id="mySelect" placeholder="gender" className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
        >
          <option value="gender" style={{ color: '#C7D2FE' }}>Gender</option>
          <option value="Male" style={{ color: '#C7D2FE' }}>Male</option>
          <option value="Female" style={{ color: '#C7D2FE' }}>Female</option>
        </select>

        <input
          type="email"
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          placeholder="Email"
        />

        <input
          type="password"
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          placeholder="New password"
        />
        <input
          type="password"
          className="rounded-[20px] border border-gray-300 outline-none p-[12px_15px] box-border"
          placeholder="Conform password"
        />
        <button className="p-[10px_15px] font-sans rounded-[20px] border-0 outline-none bg-black hover:bg-blue-500 text-white cursor-pointer shadow-md active:shadow-none">
          Join
        </button>

      </form>
      <p className="text-[10px] text-gray-500 font-sans">
        <Link to="/login">
          <span className="ml-[1px] text-[14px] underline text-teal-500 font-bold cursor-pointer no-underline ">Already have account Sigin ?</span></Link>

      </p>


    </div >
  )
}
export default Signup;