import mongoose from "mongoose";

const mongoDB = process.env.DB;

const connectDb = async () => {
  try {
    await mongoose.connect(mongoDB);
    console.log("connected");
  } catch (error) {
    console.log("mongodb error:", error);
    process.exit(1);
  }
};

export default connectDb;
