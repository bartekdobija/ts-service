import * as express from "express";
import SampleService from "../services/SampleService";

const service: SampleService = new SampleService();

/**
 * ping
 */
export const ping = async (req: express.Request, res: express.Response) => {
  res.status(200).json(service.ping());
};
