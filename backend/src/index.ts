import express, { Request } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import connectDb from "./config/connect";
import {
  careRouter,
  docterRouter,
  mindRouter,
} from "./routes/product/productRoute";
import userRoutes from "./routes/user/userRoutes";
import { Orouter } from "./controller/user/oAuth/google";
import { cartRouter } from "./routes/cartRouter";
import checkUserAuth from "./middlewares/user/userMiddleware";
import { AdminRouter } from "./routes/adminRouter";

const mongoUrl = process.env.MONGOURL || "";
const port = process.env.PORT || 8080;
const app = express();

// For CORS Policy
app.use(cors());
app.use(express.json());

// Just for checking the Home Route
app.all("/", (req, res) => res.send("working"));

app.use("/admin",AdminRouter);
app.use("/care", careRouter);
app.use("/mind", mindRouter);
app.use("/docter", docterRouter);

// Loading Routes
app.use("/api/user", userRoutes);
app.use("/api/user", Orouter);

app.use(checkUserAuth);
app.use("/cart", cartRouter);

// Connecting to Mongo Database
connectDb(mongoUrl);

// Connecting App to the Localhost
app.listen(port, () => {
  console.log("Connected to http://localhost:" + port);
});
