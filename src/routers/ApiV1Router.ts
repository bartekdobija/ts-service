import * as express from "express";
import { errorRequestHandler } from "ts-service-utils";
import {ping} from "../controllers/Api";

const router = express.Router();

/**
 * ping
 */
router.get("/ping", ping, errorRequestHandler);

export default router;