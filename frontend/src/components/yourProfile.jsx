import React from 'react'
import { useSelector } from 'react-redux';




const YourProfile = () => {
  const { profile } = useSelector((state) => state.user)


  return (
    <div className="w-full bg-cover bg-center ">
      <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
      <div className='flex items-center justify-center space-x-10 m-2'>
        <img
          src={`data:image/png;base64,${profile?.profile}`}
          alt="Avatar"
          className="mx-2 my-2 rounded-full border-5 border-blue-500 w-[20%]"

        />
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold">{profile?.fullname}</h2>
          <a href=""><p className=" text-blue-500">{`@${profile?.userName}`}</p></a>
        </div>
        <div className="px-4 flex flex-col w-[50] space-y-3">
          <div className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
            {`Followers ${profile?.followers.length}`}
          </div>
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            {`Following ${profile?.following.length}`}
          </div>
        </div>

      </div>
    </div>

  );
};

export default YourProfile
