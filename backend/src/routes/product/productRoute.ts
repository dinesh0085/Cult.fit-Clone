import express from "express";
import { getCare, getMind, setCare, setMind } from "../../controller/product/product";

export const careRouter = express.Router();
careRouter.get("/",getCare);
careRouter.post("/",setCare)

export const mindRouter = express.Router();
mindRouter.get("/",getMind);
mindRouter.post("/",setMind);
