import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";
import express from "express";
import status from "./controllers/ServiceStatus";
import api from "./routers/ApiV1Router";

const app = express();

app.disable("x-powered-by");

app.use(compression());
app.use(cors());
app.use(bodyParser.json({limit: "10mb"}));
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}));

app.use("/api/v1", api);
app.use("/status", status);

export default app;
