import mongoose from "mongoose";
const { Schema } = mongoose;

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    like: {
      type: Array,
      default: [],
    }, // Array of user IDs that like the post

    // replies: [
    //   {
    //     userId: {
    //       type: Schema.Types.ObjectId,
    //       ref: "User",
    //       required: true,
    //     },
    //     content: {
    //       type: String,
    //       required: true,
    //       trim: true,
    //     },
    //     createdAt: {
    //       type: Date,
    //       default: Date.now,
    //     },
    //   },
    // ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    userDetails: {
      type: Array,
      default: [],
      required: true,
    },
  },
  { timestamps: true }
);

export const post = mongoose.model("post", postSchema);
// 66dd84cfbfcee403e14278b8
