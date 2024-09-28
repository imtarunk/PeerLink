import React from 'react'
import { useSelector } from 'react-redux';
import { USER_API_END_POINT } from './util/endpoint';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { getRefresh } from '../../../backend/redux/userSlice';




const YourProfile = () => {
  const { user, profile } = useSelector((state) => state.user)
  const { refresh } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleFollowUnfollow = async (id) => {
    console.log("click");
    if (user?.following?.includes(id)) {
      // User is already following, attempt to unfollow
      try {
        const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, {
          id: user?._id
        }, {
          withCredentials: true
        });
        dispatch(getRefresh());

        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        console.error("Error unfollowing:", error);
      }
    } else {
      // User is not following, attempt to follow
      try {
        const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, {
          id: user?._id
        }, {
          withCredentials: true
        });

        console.log(res);
        dispatch(getRefresh());

        if (res.data.success) {
          toast.success(res.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    }

  }

  return (
    <div className="bg-cover bg-center ">
      <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="" />
      <div className='flex items-center justify-center space-x-10 m-2 box-border'>
        <img
          src={`data:image/png;base64,${profile?.profile}`}
          alt="Avatar"
          className="mx-2 my-2 rounded-full border-5 border-blue-500 w-[20%]"

        />
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold">{profile?.fullname}</h2>
          <a href=""><p className=" text-blue-500">{`@${profile?.userName}`}</p></a>
        </div>
        <div className="px-4 flex flex-col  space-y-3 items-center">
          <div className='flex flex-row space-x-1'>
            <div className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              {`Followers ${profile?.followers.length}`}
            </div>
            <div className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-full">
              {`Following ${profile?.following.length}`}
            </div>
          </div>
          <div className="w-[30%] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-full flex items-center justify-center" onClick={() => { handleFollowUnfollow(profile?._id) }}>
            Edit
          </div>


        </div>

      </div>
    </div>

  );
};

export default YourProfile
