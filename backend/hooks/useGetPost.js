import axios from "axios";
import { POST_API_END_POINT } from "../../frontend/src/components/util/endpoint";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPost } from "../redux/postSlice";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const useGetPost = (id) => {
  const dispatch = useDispatch();
  const { refresh } = useSelector((store) => store.post);
  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const res = await axios.get(`${POST_API_END_POINT}/feed/${id}`, {
          withCredentials: true,
        });
        // console.log(res);
        dispatch(getPost(res.data.Feeds));
      } catch (error) {
        toast.error(error.res.data.message);
        console.log(error);
      }
    };
    fetchFeed();
  }, [refresh]);
};
export default useGetPost;
