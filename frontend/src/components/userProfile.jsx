import React from 'react'
import { IoIosMore } from "react-icons/io";
import { useSelector } from 'react-redux'
import useGetProfile from '../../../backend/hooks/useGetProflie';

const UserProfile = () => {
  const { user } = useSelector(store => store.user);


  return (
    <div>
      <div className='flex items-center justify-evenly absolute bottom-5 space-x-1 hover:cursor-pointer'>
        <img
          src={`data:image/png;base64,${user.profile}`}
          alt="Avatar"
          className="mx-2 my-2"
          width="60"
          height="60"
        />

        <div className='flex items-center justify-center space-x-10'>
          <div className='space-y-.1'>
            <h1 className='text-x font-bold'>{user?.fullname}</h1>
            <p className='text-gray-500'>{`@${user.userName}`}</p>
          </div>
          <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <IoIosMore size="24px" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default UserProfile


