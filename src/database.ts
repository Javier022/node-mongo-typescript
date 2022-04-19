import mongoose, { ConnectOptions } from "mongoose";

export const dbConnection = async () => {
  try {
    const momgoOptions: ConnectOptions = {};
    const pool = await mongoose.connect("mongodb://localhost:27017/videosdb");
    console.log("db connected");
    return pool;
  } catch (error) {
    console.log(error);
  }
};
