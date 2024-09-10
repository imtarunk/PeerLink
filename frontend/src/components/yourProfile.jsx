import React from 'react'
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { FaRegCalendarAlt } from "react-icons/fa";
// import profimg from ''
import YourPost from './yourPost'

const YourProfile = () => {
  return (
    <div className="w-full bg-cover bg-center ">
      <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
      <div className='flex items-center justify-center space-x-10 m-2'>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
          alt="Avatar"
          className="rounded-full border-5 border-blue-500 w-[20%]"
        />
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold">Tarunk saini</h2>
          <a href=""><p className=" text-blue-500 text-lg">@codexkalii</p></a>
        </div>
        <div className="px-4 flex flex-col w-[50] space-y-3">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
            Followers
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Following
          </button>
        </div>

      </div>
    </div>

  );
};

export default YourProfile


