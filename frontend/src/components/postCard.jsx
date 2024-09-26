import React, { useEffect, useState } from "react";
import { TiMessages } from "react-icons/ti";
import { CiRepeat } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import axios from "axios";
import { POST_API_END_POINT, USER_API_END_POINT } from "./util/endpoint";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import useGetPost from "../../../backend/hooks/useGetPost";
import { getRefresh } from "../../../backend/redux/postSlice";
import TailwindSemiTransparentModal from "./TailwindSemiTransparentModal";
import { MdOutlineDelete } from "react-icons/md";


const PostCard = ({ post }) => {
  const [isLike, setLike] = useState(true);
  const [isBookmark, setBookmark] = useState(true);
  const { user, posts } = useSelector((store) => store.user);
  const { refresh } = useSelector((store) => store.post);
  const [isMorebtnActive, setMorebtnActive] = useState(false);
  const dispatch = useDispatch();

  const handleBookmark = async (id) => {
    setBookmark(!isBookmark);
    try {
      const res = await axios.put(
        `${USER_API_END_POINT}/bookmark/${id}`,
        {
          id: user._id,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  // Function to handle like or dislike action

  const handleLike = async (id) => {
    try {
      const res = await axios.put(
        `${POST_API_END_POINT}/like/${id}`,
        { id: user?._id },
        { withCredentials: true }
      );
      dispatch(getRefresh()); // Trigger refresh after liking
      setLike(!isLike);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  // Refresh effect when "refresh" value changes
  useEffect(() => {
    const fetchPostData = async () => {
      try {
        await useGetPost();
      } catch (error) {
        console.log("Error fetching post:", error);
      }
    };

    fetchPostData();
  }, [refresh]);


  const handleDel = async (id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.delete(`${POST_API_END_POINT}/delete/${id}`);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
  }

  const handleMorebtn = () => {
    setMorebtnActive(!isMorebtnActive);
  };

  const getTimeDifference = (postTime) => {
    // Convert the input postTime to a Date object
    const postDate = new Date(postTime);

    // Get the current time as a Date object
    const currentTime = new Date();

    // Calculate the difference in milliseconds
    const timeDifference = currentTime - postDate;

    // Calculate the difference in days, hours, and minutes
    const minutesDiff = Math.floor(timeDifference / (1000 * 60));
    const hoursDiff = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDiff = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Separate the date and time from postTime
    const date = postDate.toISOString().split("T")[0]; // YYYY-MM-DD
    const time = postDate.toISOString().split("T")[1].split(".")[0]; // HH:MM:SS

    // Return the separated date, time, and time difference
    return {
      date: date,
      time: time,
      minutesAgo: minutesDiff,
      hoursAgo: hoursDiff,
      daysAgo: daysDiff
    }
  }

  return (
    <div className="h-auto border-b border-gray-200 relative">
      <div className="flex items-center">
        <div width="55" className="m-2 flex flex-row">
          <img
            src={`data: image / png; base64, ${post?.userDetails[0].profile} `}
            alt="Avatar"
            className="mx-2 my-2 border-2 border-blue-500 rounded-full"
            width="60"
            height="60"
          />
        </div>
        <div className="">
          <div className="flex flex-row space-x-2 items-center">
            <div>
              <h1 className="font-bold text-lg">{`${post?.userDetails[0].fullname} `}</h1>
            </div>
            <h3 className="text-sm text-gray-500">
              {getTimeDifference(post?.createdAt)?.hoursAgo}H
            </h3>
            <h3 className="text-sm text-gray-500">
              {getTimeDifference(post?.createdAt)?.date}
            </h3>
          </div>
          <div>
            <h2 className="text-blue-400">{`@${post?.userDetails[0]?.userName}`}</h2>
          </div>
        </div>
        {user?._id === post?.userId && (
          <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer absolute right-2">
            {/* <TailwindSemiTransparentModal del={}/> */}
            <MdOutlineDelete size="24px" onClick={() => handleDel(post?._id)} />
          </div>
        )}
      </div>
      <div>
        <div className="border border-gray-200 ml-[10%] mr-3 p-4 rounded-md">
          {post?.content}
        </div>
      </div>
      <div className="ml-[10%] mt-2 mb-2 relative">
        <div className="reactuonIcon flex items-center space-x-4 text-xl">
          <div className="flex items-center">
            <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <TiMessages size="24px" />
            </div>
            <p className="ml-2">0</p>
          </div>

          <div className="flex items-center">
            <div className="p-2 hover:bg-gray-200 rounded-full cursor-pointer">
              <CiRepeat size="24px" />
            </div>
            <p className="ml-2">0</p>
          </div>

          <div className="flex flex-row p-2 hover:bg-gray-200 rounded-full cursor-pointer items-center">
            <div
              className={`w - 8 h - 8 flex items - center justify - center rounded - full ${isLike ? "bg-white text-black" : "bg-red-500 text-white"
                } `}>
              <CiHeart size="24px" onClick={() => handleLike(post?._id)} />
            </div>
            <p className="ml-2">{post?.like.length}</p>
          </div>

          <div className="ml-8 flex absolute space-x-2 right-3 flex-row p-2 hover:bg-gray-200 rounded-full cursor-pointer items-center ">
            <div
              className={`w - 8 h - 8 flex items - center justify - center rounded - full ${isBookmark ? "bg-white text-black" : "bg-blue-900 text-white"
                } `}>
              <CiBookmark
                size="24px"
                onClick={() => handleBookmark(post?._id)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
