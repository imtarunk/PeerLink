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
    <div className="w-full border-l border-r border-gray h-full">
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
              <button className="flex justify-center items-center  bg-[#0866FF] rounded-[1.25em] border-0 transition-all duration-200 hover:shadow-[3.4px_2.5px_4.9px_rgba(0,0,0,0.025),_8.6px_6.3px_12.4px_rgba(0,0,0,0.035),_17.5px_12.8px_25.3px_rgba(0,0,0,0.045),_36.1px_26.3px_52.2px_rgba(0,0,0,0.055),_99px_72px_143px_rgba(0,0,0,0.08)] p-2 text-sm  absolute right-2" onClick={handlePost}>
                <svg className="svgIcon w-5 h-5 mr-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path>
                </svg>
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
