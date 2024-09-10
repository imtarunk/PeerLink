import { post } from "../models/postSchema.js";
import { User } from "../models/userSchema.js";

export const createPost = async (req, res) => {
  try {
    const { content, id } = req.body;
    if (!content || !id) {
      return res
        .status(401)
        .json({ message: "Please provide content", success: false });
    }
    // Validate user ID

    const user = await User.findById(id).select("-password");

    await post.create({
      content,
      userId: id,
      userDetails: user,
    });
    return res
      .status(201)
      .json({ message: "Post created successfully", success: true });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await post.findByIdAndDelete(id);
    return res.status(200).json({
      message: "Post deleted successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const likeOrDislike = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const postId = req.params.id;
    const Post = await post.findById(postId);

    if (Post.like.includes(loggedInUserId)) {
      //dislike
      await post.findByIdAndUpdate(postId, { $pull: { like: loggedInUserId } });
      return res.status(200).json({
        message: "User remove like from  your post",
      });
    } else {
      //like
      await post.findByIdAndUpdate(postId, { $push: { like: loggedInUserId } });
      return res.status(200).json({ message: "User liked your post" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getFollowingFeed = async (req, res) => {
  try {
    const id = req.params.id; //yourIDfrom LINk
    const myProfile = await User.findById(id);
    const followingUserPost = await Promise.all(
      myProfile.following.map((otherUserid) => {
        return post.find({ userId: otherUserid });
      })
    );
    return res.status(200).json({
      FeedsByFollowing: { followingUserPost },
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllPost = async (req, res) => {
  //This are my tweets:
  try {
    const id = req.params.id; //yourIDfrom LINk
    const myProfile = await User.findById(id);
    console.log(myProfile.fullname);
    const myPost = await post.find({ userId: id });

    //other user post
    const followingUserPost = await Promise.all(
      myProfile.following.map((otherUserid) => {
        return post.find({ userId: otherUserid });
      })
    );
    return res.status(200).json({
      Feeds: myPost.concat(...followingUserPost),
    });
  } catch (error) {
    console.log(error);
  }
};
