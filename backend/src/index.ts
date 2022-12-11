import express, { Request } from "express";
import cors from "cors";
import "dotenv/config";

const port = process.env.PORT || 8080;
const app = express();
app.use(cors());
app.use(express.json());



function mid (req: Request,res: express.Response){
    res.send("app succesfully");
}


app.get("/", mid);

app.listen(port, () => {
    console.log("http://localhost:8080/");
})