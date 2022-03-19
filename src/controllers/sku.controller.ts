import { Request, Response } from "express";
import { get } from "lodash";
import { fetchSKUs } from "../services";
import log from "../logger";

export async function fetchSKU(req: Request, res: Response): Promise<Response> {
  const sku = get(req.query, "sku") as string;

  //Entry Point
  const result = await fetchSKUs(sku);
  log.info(result);
  return res.send(result);
}
