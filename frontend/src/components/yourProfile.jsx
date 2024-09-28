import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_API_END_POINT } from "./util/endpoint";
import axios from "axios";
import toast from "react-hot-toast";
import { getRefresh } from "../../../backend/redux/userSlice";

const YourProfile = () => {
  const { user, profile } = useSelector((state) => state.user);
  const { refresh } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    console.log("click");
    setIsEditing(true); // Toggle editing mode
  };

  const handleFollowUnfollow = async (id) => {
    if (user?.following?.includes(profile?._id)) {
      try {
        const response = await axios.post(
          `${USER_API_END_POINT}/unfollow/${id}`,
          { id: user?._id },
          { withCredentials: true }
        );
        dispatch(getRefresh()); // To refresh the component
        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
      }
    } else {
      try {
        const response = await axios.post(
          `${USER_API_END_POINT}/follow/${id}`,
          { id: user?._id },
          { withCredentials: true }
        );
        dispatch(getRefresh()); // To refresh the component
        toast.success(response.data.message);
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "An error occurred");
      }
    }
  };

  // Refresh the component when the 'refresh' state changes
  useEffect(() => {
    // This will run when 'refresh' is updated
  }, [refresh]);

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
              onClick={handleEdit}
            >
              Edit Profile
            </button>
          ) : (
            <button
              className="bg-black text-gray-300 font-semibold text-base h-12 rounded-md px-3 cursor-pointer shadow-lg shadow-gray-400/15 flex items-center justify-center hover:bg-gray-800 w-full"
              onClick={() => handleFollowUnfollow(profile?._id)}
            >
              {profile?.followers?.includes(user?._id) ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
      </div>

      {isEditing && (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Change profile name"
              className="w-full m-2 p-2"
              required
            />
            <input
              type="text"
              placeholder="User ID"
              className="w-full m-2 p-2"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full m-2 p-2"
              required
            />
            <input
              type="password"
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
