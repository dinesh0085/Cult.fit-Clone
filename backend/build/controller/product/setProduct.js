"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCare = exports.setMind = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const careModel_1 = require("../../modules/product/careModel");
const mindModel_1 = require("../../modules/product/mindModel");
const setMind = async (req, res) => {
    const { image = "", title = "", desc = "", price = 0, } = req.body;
    if (title && price)
        try {
            let care = await mindModel_1.mindModel.create({ image, title, desc, price });
            return res.send(care);
        }
        catch (e) {
            if (e instanceof mongoose_1.default.Error.ValidationError)
                return res.send(e.message);
            else
                return res.status(501).send("internal server error");
        }
    else
        return res.send("please provide complete details");
};
exports.setMind = setMind;
const setCare = async (req, res) => {
    const { image = "", title = "", desc = "", price = 0, tests = [{}], } = req.body;
    if (title && price && tests.length)
        try {
            let care = await careModel_1.careModel.create({ image, title, desc, price, tests });
            return res.send(care);
        }
        catch (e) {
            if (e instanceof mongoose_1.default.Error.ValidationError)
                return res.send(e.message);
            else
                return res.status(501).send("internal server error");
        }
    else
        return res.send("please provide complete details");
};
exports.setCare = setCare;
