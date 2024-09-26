import React from 'react'
import travelmateLogo from "../assets/travelmateLogo.png"
import { CiHome } from "react-icons/ci";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleMore } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import UserProfile from './userProfile'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { USER_API_END_POINT } from './util/endpoint';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';


const LeftSidebar = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user)

  const handleLogout = async () => {
    try {
      const res = await axios.post(`${USER_API_END_POINT}/logout`)
      toast.success(res.data.message)

      navigate('/login')

    } catch (error) {

    }
  }
  return (
    <div className='flex fixed left-[5%] top-0 w-[20%] h-screen justify-center'>
      <center className='w-full space-x-1 space-y-5'>
        <div className="logo ">
          <img className="flex w-[65%]" src={travelmateLogo} alt="" />
        </div>
        <div className='space-y-5' >
          <div className="flex flex-col justify-center items-start">
            <Link to={"/"}><div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <CiHome size="35px" />
              <h1 className='font-bold text-lg ml-2'>Home</h1>
            </div>
            </Link>
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <HiMagnifyingGlass size="35px" />
              <h1 className='font-bold text-lg ml-2'>Explore</h1>
            </div>
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <IoMdNotificationsOutline size="35px" />
              <h1 className='font-bold text-lg ml-2'>Notification</h1>
            </div>
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <CiMail size="35px" />
              <h1 className='font-bold text-lg ml-2'>Messages</h1>
            </div>
            <Link to={"/bookmark"}><div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <CiBookmark size="35px" />

              <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
            </div></Link>
            <Link to={`/profile/${user?._id}`}>
              <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
                <CiUser size="35px" />
                <h1 className='font-bold text-lg ml-2'>Profile</h1>
              </div>
            </Link>
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <CiCircleMore size="35px" />
              <h1 className='font-bold text-lg ml-2'>More</h1>
            </div>
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full" onClick={handleLogout}>
              <CiLogout size="35px" />
              <h1 className='font-bold text-lg ml-2'>Logout</h1>
            </div>
          </div>
          <div>
            <a href="#" className="button type-C relative w-[60%] h-14 text-base font-bold text-[#ffffff] tracking-[2px] transition-all duration-300 ease-in-out hover:tracking-[6px] bg-black flex items-center justify-center rounded-full overflow-hidden flex-wrap ">
              <span className="button__text relative z-10">POST</span>
              <div className="button__drow1 absolute top-[-1rem] left-[2.5rem] w-8 h-0 bg-[#defffa] rounded-lg"></div>
              <div className="button__drow2 absolute top-[2.75rem] left-[4.75rem] w-8 h-0 bg-[#000000] rounded-lg"></div>
            </a>
          </div>

          <Link to={`/profile/${user?._id}`}>
            <UserProfile />
          </Link>
        </div>



      </center>
    </div>

  )
}

export default LeftSidebar;