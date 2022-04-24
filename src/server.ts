import status from "./routers/StatusRouter";
import api1 from "./routers/ApiV1Router";
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
app.use(compression());
app.use(cors());
app.use(status);

app.use('/v1', api1);

export default app;
