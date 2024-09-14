import { createSlice } from "@reduxjs/toolkit";

const PostSlice = createSlice({
  name: "post",
  initialState: {
    posts: null,
    followingPost: null,
    refresh: false,
  },
  reducers: {
    // multiple actions
    getPost: (state, action) => {
      state.posts = action.payload;
    },
    getfollowingPost: (state, action) => {
      state.followingPost = action.payload;
    },
    getRefresh: (state) => {
      state.refresh = !state.refresh;
    },
  },
});
export const { getPost, getfollowingPost, getRefresh } = PostSlice.actions;
export default PostSlice.reducer;
