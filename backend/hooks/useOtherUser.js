import axios from "axios";
import { USER_API_END_POINT } from "../../frontend/src/components/util/endpoint";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOtherUsers } from "../redux/userSlice";

const useOtherUsers = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOtherUser = async () => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/people/${id}`, {
          withCredentials: true,
        });
        console.log(res);
        dispatch(getOtherUsers(res.data.list));
      } catch (error) {
        console.log(error);
      }
    };
    fetchOtherUser();
  }, [id]);
};
export default useOtherUsers;
