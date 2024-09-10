import express from "express";
import {
  Register,
  Login,
  Logout,
  bookmark,
  getMyProfile,
  MyProfileForOther,
  getPeopleList,
  follow,
  unfollow,
} from "../controllers/userControl.js";
import { isAuthenticated } from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(Logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/profile/notAuth/:id").get(MyProfileForOther);
router.route("/people/:id").get(isAuthenticated, getPeopleList);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);

// router.route("/createpost").post(isAuthenticated, createPost);

export default router;
