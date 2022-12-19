"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDocters = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const docterModel_1 = require("../modules/docterModel");
const getDocters = async (req, res) => {
    const search = req.query.search || "";
    let limit = (req.query.limit) || 10;
    if (typeof limit != "number")
        limit = 10;
    try {
        let full = await docterModel_1.doctersModel.find().limit(limit);
        if (search && typeof search == "string") {
            let srch = full.filter((e) => { var _a, _b; return (_b = (_a = e.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()) === null || _b === void 0 ? void 0 : _b.includes(search.toLocaleLowerCase()); });
            return res.send(srch);
        }
        else
            return res.send(full);
    }
    catch (e) {
        if (e instanceof mongoose_1.default.Error.ValidationError)
            return res.send(e.message);
        else
            return res.status(501).send("internal server error");
    }
};
exports.getDocters = getDocters;
