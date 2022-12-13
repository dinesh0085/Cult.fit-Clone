import express from "express";
import { getCare, getMind } from "../../controller/product/product";

export const careRouter = express.Router();
careRouter.get("/",getCare);

export const mindRouter = express.Router();
mindRouter.get("/",getMind);

