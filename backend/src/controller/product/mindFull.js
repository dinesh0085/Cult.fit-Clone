"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMindFull = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mindFull_1 = require("../../modules/product/mindFull");
const getMindFull = async (req, res) => {
    try {
        let full = await mindFull_1.mindfullModel.find();
        res.send(full);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            res.send(e.message);
        else
            res.status(501).send("internal server error");
    }
};
exports.getMindFull = getMindFull;
