import React, { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { CiFaceSmile } from "react-icons/ci";
import { TbCalendarTime } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";
import PostCard from "./postCard";
import { useSelector } from "react-redux";
import axios from "axios";
import { POST_API_END_POINT } from "./util/endpoint";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getRefresh } from "../../../backend/redux/postSlice";

const Feed = () => {
  const [content, setContent] = useState("");
  const { posts } = useSelector((store) => store.post);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();


  const handlePost = async () => {
    try {
      const res = await axios.post(
        `${POST_API_END_POINT}/create`,
        { content, id: user?._id },
        {
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.res.data.message);
      console.log(error);
    }
  };
  return (
    <div className="w-[50%]  border-l border-r border-gray h-full relative left-[20%]">
      <center>
        <div className="flex items-center justify-evenly  border-b border-b-gray-200 h-12">
          <div className="w-full h-full  hover:border-b-4 border-blue-500 rounded-b-l">
            <div className="w-[40%]">
              <h1 className="font-bold  text-black text-sm ">For you</h1>
            </div>
          </div>
          <div className="w-full h-full  hover:border-b-4 border-blue-500 rounded-b-l">
            <div className="w-[40%]">
              <h1 className="font-bold text-black text-sm ">Following</h1>
            </div>
          </div>
        </div>
      </center>
      {/* Create post */}
      <div className="createPost  border-b border-b-gray-200 ">
        <div className="flex flex-row p-2 pb-0 items-center ">
          <div width="60" className="m-1">
            <img
              src={`data:image/png;base64,${user.profile}`}
              alt="Avatar"
              className="mx-2 my-2 border-2 border-blue-500 rounded-full"
              width="60"
              height="60"

            />

          </div>
          <div className="w-full">
            <input
              type="text"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type something..."
              className="w-full outline-none border-none text-xl ml-2"
            />
          </div>
        </div>
        <div className="ml-[18%] mr-2 p-3">
          <div className="w-[100%] flex items-center relative">
            <div className="flex justify-evenly space-x-2 text-2xl">
              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <CiImageOn size="24px" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <MdOutlineGifBox size="24px" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <MdOutlinePoll size="24px" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <CiFaceSmile size="24px" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <TbCalendarTime size="24px" />
                </div>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
                  <CiLocationOn size="24px" />
                </div>
              </div>

              <button
                className="bg-black text-white rounded-full p-2 text-sm w-[60px] flex items-center justify-center absolute right-2  hover:bg-blue"
                onClick={handlePost}>
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="recentPostUpdate flex items-center justify-center p-2  border-b border-b-gray-200">
        <h1 className="text-blue-500">{` ${posts?.length} new Feeds `}</h1>
      </div>
      {posts?.map((post) => (
        <PostCard key={post?._id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
