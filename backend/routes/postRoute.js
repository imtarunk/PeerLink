import express from "express";
import {
  createPost,
  deletePost,
  likeOrDislike,
  getAllPost,
  getFollowingFeed,
} from "../controllers/postControl.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createPost);
router.route("/delete/:id").delete(isAuthenticated, deletePost);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);
router.route("/feed/:id").get(isAuthenticated, getAllPost);
router.route("/followingfeed/:id").get(isAuthenticated, getFollowingFeed);

export default router;
