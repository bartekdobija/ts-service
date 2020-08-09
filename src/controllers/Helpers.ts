import express from "express";
import { Client } from "pg";
import Response from "../models/Response";

export function success(res: express.Response, result) {
  res.status(200).json(Response.success(result));
}

export function error(res: express.Response, exception) {
  res.status(400).json(Response.failure(exception));
}

const dbCheckQuery = "select 1";

export async function health(params?: { dbClient: Client }):
    Promise<{ db: string }> {

  let dbResult: string;
  let dbClient: Client;
  try {
    dbClient = (params && params.dbClient) ? params.dbClient : new Client();
    dbClient.connect();
    dbResult = (await dbClient.query(dbCheckQuery)).rowCount > 0
      ? "online"
      : "offline";
  } catch (e) {
    dbResult = "offline";
  } finally {
    if (dbClient) {
      dbClient.end();
    }
  }

  return {
    db: dbResult,
  };
}
