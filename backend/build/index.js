"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const productRoute_1 = require("./routes/product/productRoute");
const mongoUrl = process.env.MONGOURL || "";
const port = process.env.PORT || 8080;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.all("/", (req, res) => res.send("working"));
app.use("/care", productRoute_1.careRouter);
app.use("/mind", productRoute_1.mindRouter);
app.use("/docter", productRoute_1.docterRouter);
mongoose_1.default.connect(mongoUrl).then(() => {
  app.listen(port, () => {
    console.log("http://localhost:8080/");
  });
});
