import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postSlice from "./postSlice";
const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
  },
});
export default store;
