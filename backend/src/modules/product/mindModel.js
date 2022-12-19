"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mindModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mindModel = mongoose_1.default.model("mind", new mongoose_1.default.Schema({
    image: String,
    title: String,
    desc: String,
    price: Number,
}));
