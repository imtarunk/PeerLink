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


const LeftSidebar = () => {
  return (
    <div className='w-[20%] mr-6 h-[100vh]  '>
      <div className="logo ">
        <img className="ml-5" width={"110px}"} src={travelmateLogo} alt="" />
      </div>
      <div>
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
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <CiUser size="25px" />
          <h1 className='font-bold text-lg ml-2'>Profile</h1>
        </div>
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <CiCircleMore size="25px" />
          <h1 className='font-bold text-lg ml-2'>More</h1>
        </div>
        <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
          <CiLogout size="25px" />
          <h1 className='font-bold text-lg ml-2'>Logout</h1>
        </div>

        <button className='px-4 py-2 border-none rounded-full  hover:bg-gray-200 hover:text-black hover:cursor-pointer text-md text-white w-full bg-black cl-white font-bold'>Post</button>

      </div>
    </div>

  )
}

export default LeftSidebar;