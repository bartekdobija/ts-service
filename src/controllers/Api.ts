import * as express from "express";
import SampleService from "../services/SampleService";
import { error, success } from "./Helpers";

const router: express.Router = express.Router();
const service: SampleService = new SampleService();

const handle = (result: Promise<any>, res: express.Response) => {
  result
    .then(r => success(res, r))
    .catch(_ => error(res, "internal server error"));
};

router.use(express.json());

/**
 * ping
 */
const ping = (req: express.Request, res: express.Response) => {
    true ? handle(service.ping(), res)
         : error(res, "bad request");
};

export = {
  ping,
};
