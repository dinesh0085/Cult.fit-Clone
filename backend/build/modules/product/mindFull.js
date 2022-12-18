"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mindfullModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.mindfullModel = mongoose_1.default.model("mindfull", new mongoose_1.default.Schema({
    image: String,
    title: String,
    desc: String,
    url: String,
    packs: Number
}));
