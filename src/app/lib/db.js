
import mongoose from "mongoose";

function connectDB() {
  try {
     mongoose.connect(`${process.env.MONGODB_URI}`, {});
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error", error);
    process.exit(1);
  }
}
export default connectDB;
