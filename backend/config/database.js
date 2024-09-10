import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../config/.env" });

const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    // Consider implementing a retry mechanism or fallback strategy instead of exiting the process
    // process.exit(1);
  }
};

export default databaseConnection;
