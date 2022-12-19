import express from "express";
import { adminLogin } from "../controller/admin/admin";

export const AdminRouter = express.Router();

AdminRouter.post("/login", adminLogin);
