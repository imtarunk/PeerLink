import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    DOB: {
      type: String,
      required: true,
    },

    followers: {
      type: Array,
      unique: true,
      default: [],
    },
    following: {
      type: Array,
      unique: true,
      default: [],
    },
    Bookmark: {
      type: Array,
      default: [],
    },
    profile: {
      type: String,
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);
