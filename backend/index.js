// app.js
import express from "express";
import databaseConnection from "./config/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});
databaseConnection();
const app = express();

// middlewares
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Use the auth router
app.use("/api/v1/user", userRoute);
app.use("/api/v1/post", postRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listen at port ${process.env.PORT}`);
});
