import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_API_END_POINT } from "./util/endpoint";
import axios from "axios";
import toast from "react-hot-toast";
import { getRefresh } from "../../../backend/redux/postSlice";
import { followingUpdate, getMyProfile } from '../../../backend/redux/userSlice';
import { useParams } from 'react-router-dom'
import useGetProfile from '../../../backend/hooks/useGetProflie'

const YourProfile = () => {
  const { user, profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  useGetProfile(id);





  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  const followAndUnfollowHandler = async () => {
    if (user.following.includes(id)) {
      // Unfollow
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/unfollow/${id}`, { id: user?._id });
        dispatch(followingUpdate(id));
        dispatch(getRefresh());
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      // Follow
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(`${USER_API_END_POINT}/follow/${id}`, { id: user?._id });
        dispatch(followingUpdate(id));
        dispatch(getRefresh());
        toast.success(res.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <div className="bg-cover bg-center">
      <img
        src={
          profile?.cover
            ? `data:image/png;base64,${profile.cover}`
            : "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        }
        alt="Cover Image"
        className="w-full h-[400px]"
      />
      <div className="flex items-center justify-center space-x-10 m-2 box-border">
        <img
          src={`data:image/png;base64,${profile?.profile}`}
          alt="Avatar"
          className="mx-2 my-2 rounded-full border-5 border-blue-500 w-[20%]"
        />
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-2xl font-bold">
            {profile?.fullname || "Full Name"}
          </h2>
          <a href="">
            <p className="text-blue-500">{`@${profile?.userName || "username"}`}</p>
          </a>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <button className="bg-black text-gray-300 font-semibold text-base h-12 rounded-md px-3 cursor-pointer shadow-lg shadow-gray-400/15 flex items-center justify-center hover:bg-gray-800 w-full">
            Followers
            <span className="text-sm text-gray-500">
              &nbsp;{profile?.followers?.length}
            </span>
          </button>
          <button className="bg-black text-gray-300 font-semibold text-base h-12 rounded-md px-3 cursor-pointer shadow-lg shadow-gray-400/15 flex items-center justify-center hover:bg-gray-800 w-full">
            Followings
            <span className="text-sm text-gray-500">
              &nbsp; {profile?.following?.length}
            </span>
          </button>

          {/* Conditional rendering for follow/unfollow button */}
          {user?._id === profile?._id ? (
            <button
              className="bg-black text-gray-300 font-semibold text-base h-12 rounded-md px-3 cursor-pointer shadow-lg shadow-gray-400/15 flex items-center justify-center hover:bg-gray-800 w-full"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          ) : (
            <button
              className="bg-black text-gray-300 font-semibold text-base h-12 rounded-md px-3 cursor-pointer shadow-lg shadow-gray-400/15 flex items-center justify-center hover:bg-gray-800 w-full"
              onClick={followAndUnfollowHandler}
            >
              {profile?.followers?.includes(user?._id) ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
      </div>

      {isEditing && (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Change profile name"
              className="w-full m-2 p-2"
              required
            />
            <input
              type="text"
              value={newUserId}
              onChange={(e) => setNewUserId(e.target.value)}
              placeholder="User ID"
              className="w-full m-2 p-2"
              required
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Password"
              className="w-full m-2 p-2"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              className="w-full m-2 p-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 mt-2 rounded"
            >
              Update
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default YourProfile;
