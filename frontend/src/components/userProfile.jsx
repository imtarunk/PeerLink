import React from 'react'
import Avatar from '@mui/material/Avatar';
import { IoIosMore } from "react-icons/io";


const UserProfile = () => {
  return (
    <div className='flex items-center justify-evenly absolute bottom-5 space-x-1 hover:cursor-pointer'>
      <Avatar alt="Remy Sharp" src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725552000&semt=ais_hybrid" sx={{ width: 50, height: 50 }} className='mx-2 my-2' />
      <div className='flex items-center space-x-10'>
        <div className='space-y-.1'>
          <h1 className='text-xl font-bold'>Tarunk saini</h1>
          <p className='text-gray-500'>@codexkalii</p>
        </div>
        <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
          <IoIosMore size="24px" />
        </div>
      </div>

    </div>
  )
}

export default UserProfile