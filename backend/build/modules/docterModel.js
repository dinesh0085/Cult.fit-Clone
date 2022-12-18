"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.doctersModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.doctersModel = mongoose_1.default.model("docters", new mongoose_1.default.Schema({
    image: String,
    name: String,
    qualify: String,
    specialize: String,
    price: Number,
    langauge: Array
}));
