import { mongoose } from "mongoose";

const db = process.env.DB;

export const connectDB = async () => {
  try {
    // if db is not true
    if (!db) return console.log("database not found");

    await mongoose.connect(db);
    return console.log("connection successful");
  } catch (error) {
    console.log(error);
  }
};
