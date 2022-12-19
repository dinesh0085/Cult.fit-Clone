"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDocterCart = exports.setDocterCart = exports.getDocterCart = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const docterCartModel_1 = require("../../modules/docterCartModel");
const docterModel_1 = require("../../modules/docterModel");
const getDocterCart = async (req, res) => {
    let user = req.token;
    try {
        let docters = await docterCartModel_1.docterCartModel.find({ user });
        res.send(docters);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.getDocterCart = getDocterCart;
const setDocterCart = async (req, res) => {
    let user = req.token;
    const { startTime, docter } = req.body;
    try {
        let Docter = await docterModel_1.doctersModel.findById(docter);
        let d = await docterCartModel_1.docterCartModel.findOne({ docter: Docter });
        if (d) {
            let st = d.startTime;
            if (Number(st) - Date.now() < 216000)
                return res.send("this docter is allready apointed");
        }
        let docters = await docterCartModel_1.docterCartModel.create({ user, Docter, startTime });
        return res.send(docters);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.setDocterCart = setDocterCart;
const deleteDocterCart = async (req, res) => {
    let user = req.token;
    try {
        let docter = await docterCartModel_1.docterCartModel.findByIdAndDelete(req.body.docter);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.deleteDocterCart = deleteDocterCart;
