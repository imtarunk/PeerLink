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

const LeftSidebar = () => {
  return (
    <div className='fixed left-[5%] top-0 w-[20%] h-screen flex justify-center m-4 p-4 mt-1 pt-1 items-start'>
      <center className='w-full space-x-1 space-y-5'>
        <div className="logo ">
          <img className="flex w-[65%]" src={travelmateLogo} alt="" />
        </div>
        <div className='space-y-5' >
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <CiHome size="25px" />
            <h1 className='font-bold text-lg ml-2'>Home</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <HiMagnifyingGlass size="25px" />
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <IoMdNotificationsOutline size="25px" />
            <h1 className='font-bold text-lg ml-2'>Notification</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <CiMail size="25px" />
            <h1 className='font-bold text-lg ml-2'>Messages</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <CiBookmark size="25px" />

            <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
          </div>
          <Link to='/profile'>
            <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
              <CiUser size="25px" />
              <h1 className='font-bold text-lg ml-2'>Profile</h1>
            </div>
          </Link>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <CiCircleMore size="25px" />
            <h1 className='font-bold text-lg ml-2'>More</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <CiLogout size="25px" />
            <h1 className='font-bold text-lg ml-2'>Logout</h1>
          </div>

          <div>
            <a href="#" className="button type-C relative w-full h-14 text-base font-bold text-[#ffffff] tracking-[2px] transition-all duration-300 ease-in-out hover:tracking-[6px] bg-black flex items-center justify-center rounded-full overflow-hidden flex-wrap ">
              <span className="button__text relative z-10">POST</span>
              <div className="button__drow1 absolute top-[-1rem] left-[2.5rem] w-8 h-0 bg-[#defffa] rounded-lg"></div>
              <div className="button__drow2 absolute top-[2.75rem] left-[4.75rem] w-8 h-0 bg-[#000000] rounded-lg"></div>
            </a>
          </div>


        </div>
        <Link to='/profile'>
          <UserProfile />
        </Link>


      </center>
    </div>

  )
}

export default LeftSidebar;