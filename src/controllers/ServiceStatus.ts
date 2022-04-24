import * as express from "express";

/**
 * health check status
 */
export const healthcheck = async (req: express.Request, res: express.Response) => {
  res.status(200).json({ status: "ok" });
};
