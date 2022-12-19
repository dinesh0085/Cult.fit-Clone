"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.careModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.careModel = mongoose_1.default.model("care", new mongoose_1.default.Schema({
    image: String,
    title: String,
    desc: String,
    dprice: String,
    price: Number,
    tests: (Array),
    recomends: (Array)
}));
