import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ message: "Please login first", success: false });
    }
    const decoded = jwt.verify(token, process.env.SECRET_TOKEN);
    console.log(decoded);
    req.user = decoded.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};
