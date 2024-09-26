import React, { act, useEffect, useState } from "react";
// import Friend from "./friend";
import axios from "axios";
import { USER_API_END_POINT } from "./util/endpoint";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import useGetProfile from "../../../backend/hooks/useGetProflie";
import useOtherUsers from "../../../backend/hooks/useOtherUser";

const FriendRecbox = () => {
  const [follow, unfollow] = useState(false)
  const { id } = useParams();
  useGetProfile(id);
  const { user, otherUsers, profile } = useSelector(store => store.user);

  console.log(profile);



  const handleFollow = async (id) => {
    unfollow(!follow)
    console.log(follow)
    try {

      if (follow === true) {
        try {
          const res = await axios.post(
            `${USER_API_END_POINT}/follow/${id}`,
            {
              id: user?._id,
            },
            {
              withCredentials: true,
            }
          );
          dispatch(getRefresh());
          if (res.data.success) {
            toast.success(res.data.message)
          }

        } catch (error) {
          toast.error(error.res.data.message)
          console.log("Error during follow request:", error);
        }
      }
      else {
        try {
          const res = await axios.post(
            `${USER_API_END_POINT}/unfollow/${id}`,
            {
              id: user?._id,
            },
            {
              withCredentials: true,
            }
          );

          if (res.data.success) {
            toast.success(res.data.message)
          }
        } catch (error) {
          toast.error(error.res.data.message)
          console.log("Error during follow request:", error);
        }
      }
    } catch (error) {
      console.log(error)
    }

  };




  return (
    <div className="w-full border border-gray-300 rounded-xl flex flex-col justify-between mt-[12%] box-border p-1 space-y-4">
      <p className="p-4 font-black text-xl">Who to follow</p>
      <Link to={`/profile/${profile?._id}`}>
        <div className="flex flex-col">
          {otherUsers?.map((profile) => {
            return (

              <div
                key={profile?._id}
                className="flex items-center justify-between p-1">
                <img
                  src={`data:image/png;base64,${profile?.profile}`}
                  alt="Avatar"
                  className="mx-2 my-2  rounded-full"
                  width="60"
                  height="60"
                />
                <div className="flex justify-between items-center flex-grow">
                  <div className="text">
                    <span className="font-extrabold">{profile?.fullname}</span>
                    <p className="text-sm text-gray-500">{`@${profile?.userName}`}</p>
                  </div>
                  <div>

                    <button
                      className="border-none rounded-full bg-[#0f1113] text-white px-4 py-2 font-bold hover:bg-blue-500 cursor-pointer"
                      onClick={() => handleFollow(profile?._id)}
                    >
                      {/* {follow ? "Unfollow" : "Follow"} */}
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Link>
    </div>
  );
};

export default FriendRecbox;
