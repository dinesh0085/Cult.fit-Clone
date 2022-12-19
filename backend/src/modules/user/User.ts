import mongoose from "mongoose";

const userInfo = new mongoose.Schema({
  mobileNo: { type: Number },
  address: { type: String },
  city: { type: String },
  state: { type: String },
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  lname: { type: String },
  email: { type: String, required: true, trim: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  password: { type: String, required: true, trim: true },
  userInfo: [userInfo],
  tc: { type: Boolean, required: true },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
