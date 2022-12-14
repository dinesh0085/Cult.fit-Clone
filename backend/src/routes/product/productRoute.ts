import express from "express";
import { getDocters } from "../../controller/docter";
import { getMindFull } from "../../controller/product/mindFull";
import { getCare, getMind,  } from "../../controller/product/product";
import { setCare, setMind } from "../../controller/product/setProduct";

export const careRouter = express.Router();
careRouter.get("/",getCare);
careRouter.post("/",setCare)

export const mindRouter = express.Router();
mindRouter.get("/",getMind);
mindRouter.get("/full",getMindFull);
mindRouter.post("/",setMind);

export const docterRouter = express.Router();
docterRouter.get("/",getDocters);