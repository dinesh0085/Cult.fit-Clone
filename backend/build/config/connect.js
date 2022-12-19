"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDb = async (DATABASE_URL) => {
    try {
        await mongoose_1.default.connect(DATABASE_URL);
        console.log("Connected to Mongo Database");
    }
    catch (err) {
        console.log(err);
    }
};
exports.default = connectDb;
