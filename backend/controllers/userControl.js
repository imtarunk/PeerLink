import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";

export const Register = async (req, res) => {
  try {
    const { fullname, email, password, gender } = req.body;
    try {
      if (!email || !password || !fullname || !gender) {
        return res
          .status(400)
          .json({ message: "Please fill in all fields", success: false });
      }
    } catch (error) {
      console.log(error);
    }
    // basic validation

    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exist.",
        success: false,
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Store to keep track of already generated usernames (simulating a database)
    const existingUsernames = new Set();

    function generateUniqueUsername(email) {
      // Extract the username part from the email (before '@')
      const username = email.split("@")[0];

      // Remove non-alphanumeric characters
      const cleanUsername = username.replace(/[^a-zA-Z0-9]/g, "");

      // Generate a unique component (random + timestamp)
      let randomComponent = Math.random().toString(36).substring(2, 6); // random string of 4 characters
      let timestamp = Date.now().toString().slice(-4); // last 4 digits of the current timestamp

      // Combine cleaned username with random component and timestamp
      let uniqueUsername = `${cleanUsername}${randomComponent}${timestamp}`;

      // Ensure uniqueness (in a real application, you'd check against a database)
      while (existingUsernames.has(uniqueUsername)) {
        randomComponent = Math.random().toString(36).substring(2, 6); // regenerate random string
        timestamp = Date.now().toString().slice(-4); // regenerate timestamp
        uniqueUsername = `${cleanUsername}${randomComponent}${timestamp}`;
      }

      // Store the new unique username
      existingUsernames.add(uniqueUsername);

      return uniqueUsername;
    }

    const getAvatar = async (gender) => {
      try {
        let avatarUrl;

        // Determine the avatar URL based on gender
        if (gender === "Male") {
          avatarUrl = "https://avatar.iran.liara.run/public/boy";
        } else {
          avatarUrl = "https://avatar.iran.liara.run/public/girl";
        }

        // Fetch the avatar
        const response = await axios.get(avatarUrl, {
          responseType: "arraybuffer",
        });

        // Convert binary data to base64
        const avatarImage = Buffer.from(response.data, "binary").toString(
          "base64"
        );

        return avatarImage; // Return the base64 encoded image
      } catch (error) {
        console.error("Error fetching the avatar:", error);
        throw new Error("Failed to fetch the avatar");
      }
    };
    // Fetch the avatar image based on gender
    const profileImg = await getAvatar(gender);

    await User.create({
      fullname,
      email,
      password: hashedPassword,
      gender,
      userName: generateUniqueUsername(email),
      profile: profileImg,
    });
    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Entre a valid email address.",
        success: false,
      });
    }
    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Invalid password.",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign({ tokenData }, process.env.SECRET_TOKEN, {
      expiresIn: "1d",
    });
    return res
      .status(201)
      .cookie("token", token, { expiresIn: "1d", httpOnly: true })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
export const Logout = (req, res) => {
  return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
    message: "Logged out successfully",
    success: true,
  });
};

export const bookmark = async (req, res) => {
  try {
    const loggedInUserId = req.body.id;
    const postId = req.params.id; //postid
    const user = await User.findById(loggedInUserId); //Find login user by passing its id

    if (user.bookmarks.includes(postId)) {
      await User.findByIdAndUpdate(loggedInUserId, {
        $pull: { Bookmark: postId },
      });
      return res.status(200).json({
        message: "Removed from bookmarks.",
        success: true,
      });
    } else {
      // bookmark
      await User.findByIdAndUpdate(loggedInUserId, {
        $push: { bookmarks: postId },
      });
      return res.status(200).json({
        message: "Saved to bookmarks.",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getMyProfile = async (req, res) => {
  try {
    const loggedInUserId = req.params.id;
    const userProfile = await User.findById(loggedInUserId).select("-password");
    if (!userProfile) {
      return res.status(404).json({ message: "User info not found" });
    } else {
      res.json(userProfile);
      console.log(userProfile);
    }
  } catch (error) {
    console.log(error);
  }
};

export const MyProfileForOther = async (req, res) => {
  try {
    const loggedInUserId = req.params.id;
    const userProfile = await User.findById(loggedInUserId).select(
      "fullname gender followers createdAt"
    );
    if (!userProfile) {
      return res.status(404).json({ message: "User info not found" });
    } else {
      res.json(userProfile);
      console.log(userProfile);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getPeopleList = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await User.find({ _id: { $ne: id } }).select("-password"); //$ne = not equal except logeduser get data of all people
    if (!list) {
      return res
        .status(404)
        .json({ message: "List not found", success: false });
    } else {
      return res.status(200).json({
        list,
        message: "User data downloaded successfully",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const follow = async (req, res) => {
  try {
    const myUserid = req.body.id; //logined user details
    const userid = req.params.id; //tofollowid
    const myprofile = await User.findById(myUserid);
    const userProfile = await User.findById(userid);
    if (myprofile.following.includes(userid)) {
      return res.status(400).json({
        message: "You are already following this user",
        success: false,
      });
    } else {
      await myprofile.updateOne({ $push: { following: userid } });
      await userProfile.updateOne({ $push: { followers: myUserid } });
    }
    return res.status(200).json({
      message: `You starting following ${userProfile.fullname} `,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const unfollow = async (req, res) => {
  try {
    const myUserid = req.body.id; //myid
    const userid = req.params.id; //tofollowid
    const myprofile = await User.findById(myUserid); //myprofile
    const userProfile = await User.findById(userid); //targetProfile
    if (!myprofile.following.includes(userid)) {
      return res.status(400).json({
        message: `You are not following this user`,
      });
    } else {
      await myprofile.updateOne({ $pull: { following: userid } });
      await userProfile.updateOne({ $pull: { followers: myUserid } });
    }
    return res.status(200).json({
      message: `You unfollow to ${userProfile.fullname}`,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
///////////4:05:00
