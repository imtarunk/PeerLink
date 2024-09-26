import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import YourProfile from './yourProfile';
import { useSelector } from 'react-redux';
import { FaBirthdayCake } from "react-icons/fa";
import useGetProfile from '../../../backend/hooks/useGetProflie';



const ProfileFeed = () => {

  const { user } = useSelector((state) => state.user)
  useGetProfile(user?._id)


  return (
    <div className='border-l border-r border-gray h-full w-full'>
      <div >
        <div>
          <div className='flex space-x-10'>
            <div className='flex items-center'>
              <Link to="/">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <IoMdArrowRoundBack size="30px" />
                </div>
              </Link>
            </div>
            <div className=''>
              <h1 className='text-lg font-extrabold'>{user?.fullname}</h1>
              <p className='text-gray-500'></p>
            </div> </div>
          {/* Your user */}
          <YourProfile />

        </div>
        <div className='flex justify-around text-gray-500 p-2 border-t-2 border-b-2' >
          <div className='flex items-center space-x-2'>
            <FaBirthdayCake />
            <p>{user.DOB}</p>
          </div>

          {/* <p>{}</p> */}
          <p className='capitalize'>{user?.gender}</p>
        </div>
      </div>

    </div>
  )
}

export default ProfileFeed;