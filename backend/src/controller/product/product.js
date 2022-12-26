"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMindSingle = exports.getMind = exports.getCareSingle = exports.getCare = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const careModel_1 = require("../../modules/product/careModel");
const mindModel_1 = require("../../modules/product/mindModel");
const getCare = async (req, res) => {
    try {
        let care = await careModel_1.careModel.find({}, { tests: 0, recomends: 0 });
        return res.send(care);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.getCare = getCare;
const getCareSingle = async (req, res) => {
    try {
        let care = await careModel_1.careModel.findById(req.params.id);
        return res.send(care);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.getCareSingle = getCareSingle;
const getMind = async (req, res) => {
    try {
        let mind = await mindModel_1.mindModel.find();
        res.send(mind);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            res.send(e.message);
        else
            res.status(501).send("internal server error");
    }
};
exports.getMind = getMind;
const getMindSingle = async (req, res) => {
    try {
        let mind = await mindModel_1.mindModel.findById(req.params.id);
        res.send(mind);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            res.send(e.message);
        else
            res.status(501).send("internal server error");
    }
};
exports.getMindSingle = getMindSingle;
