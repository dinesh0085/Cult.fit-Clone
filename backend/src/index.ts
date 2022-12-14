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

const mongoUrl = process.env.MONGOURL || "";
const port = process.env.PORT || 8080;
const app = express();

// For CORS Policy
app.use(cors());
app.use(express.json());

// Just for checking the Home Route
app.all("/", (req, res) => res.send("working"));

app.use("/care", careRouter);
app.use("/mind", mindRouter);
app.use("/docter", docterRouter);

// Loading Routes
app.use("/api/user", userRoutes);

// Connecting to Mongo Database
connectDb(mongoUrl);

// Connecting App to the Localhost
app.listen(port, () => {
  console.log("Connected to http://localhost:" + port);
});
