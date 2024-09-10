import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";
import YourProfile from './yourProfile';

const ProfileFeed = () => {
  return (
    <div className='w-[50%]  border-l border-r border-gray h-[100vw] relative left-[20%] pl-.5 pr-.5 '>
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
              <h1 className='text-lg font-extrabold'>Tarunk saini</h1>
              <p className='text-gray-500'>20 posts</p>
            </div>
          </div>
          {/* Your profile */}
          <YourProfile />

        </div>
      </div>

    </div>
  )
}

export default ProfileFeed;