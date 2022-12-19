"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const admin_1 = require("../controller/admin/admin");
exports.AdminRouter = express_1.default.Router();
exports.AdminRouter.post("/login", admin_1.adminLogin);
