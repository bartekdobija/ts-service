import * as express from "express";
import ApiV1 from "../controllers/Api";

const router: express.Router = express.Router();
router.use(express.json());

/**
 * ping
 */
router.get("/ping", ApiV1.ping);

export = router;
