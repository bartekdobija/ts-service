import * as express from "express";
import { errorRequestHandler } from "ts-service-utils";
import {healthcheck} from "../controllers/ServiceStatus";

const router = express.Router();

/**
 * ping
 */
router.get("/status", healthcheck, errorRequestHandler);

export default router;