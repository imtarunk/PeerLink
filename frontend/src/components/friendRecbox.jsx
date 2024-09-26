import React, { act, useEffect, useState } from "react";
// import Friend from "./friend";
import axios from "axios";
import { USER_API_END_POINT } from "./util/endpoint";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import useGetProfile from "../../../backend/hooks/useGetProflie";

const FriendRecbox = () => {
  const { id } = useParams();
  useGetProfile(id);
  const { otherUsers } = useSelector(store => store.user);


  return (
    <div className="w-full border border-gray-300 rounded-xl flex flex-col justify-between mt-[12%] box-border p-1 space-y-4">
      <p className="p-4 font-black text-xl">Who to follow</p>
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
                  <Link to={`/profile/${profile?._id}`}>
                    <button
                      className="border-none rounded-full bg-[#0f1113] text-white px-4 py-2 font-bold hover:bg-blue-500 cursor-pointer"
                      onClick={() => showProfile()}
                    >
                      Profile
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default FriendRecbox;
