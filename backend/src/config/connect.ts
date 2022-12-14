import mongoose from "mongoose";

const connectDb = async (DATABASE_URL: string) => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to Mongo Database");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
