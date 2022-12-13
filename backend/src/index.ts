import express, { Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { careRouter, docterRouter, mindRouter } from "./routes/product/productRoute";

const mongoUrl = process.env.MONGOURL || "";
const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());



app.all("/", (req, res) => res.send("working"));

app.use("/care",careRouter);
app.use("/mind",mindRouter);
app.use("/docter",docterRouter);

mongoose.connect(mongoUrl).then(() => {
    app.listen(port, () => {
        console.log("http://localhost:8080/");
    })
})

