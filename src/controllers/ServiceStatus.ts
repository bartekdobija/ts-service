import * as express from "express";
import {error, health, success } from "./Helpers";

const router: express.Router = express.Router();

router.use(express.json());

/**
 * healthcheck status
 */
router.get("/health", (req, res) => {
  health()
    .then(result => {
      (result.db === "online" ) ? success(res, result) : error(res, result);
    })
    .catch(ex => error(res, ex));
});

export = router;
