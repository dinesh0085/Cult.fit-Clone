import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  lname: { type: String },
  email: { type: String, required: true, trim: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  password: { type: String, required: true, trim: true },
  tc: { type: Boolean, required: true },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
