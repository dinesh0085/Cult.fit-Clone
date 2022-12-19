"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, trim: true },
    lname: { type: String },
    email: { type: String, required: true, trim: true },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    password: { type: String, required: true, trim: true },
    tc: { type: Boolean, required: true },
});
const UserModel = mongoose_1.default.model("user", userSchema);
exports.default = UserModel;
