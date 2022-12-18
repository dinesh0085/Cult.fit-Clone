"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.docterCartModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.docterCartModel = mongoose_1.default.model("docterCart", new mongoose_1.default.Schema({
    docter: {
        Object,
    },
    startTime: {
        type: Number,
        default: 0
    },
    user: mongoose_1.default.Schema.Types.ObjectId
}));
