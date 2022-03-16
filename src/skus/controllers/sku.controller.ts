import {Request, Response} from "express";
import {get} from "lodash";
import {fetchSKUs} from "../services/skus.service";

export async function fetchSKU(req: Request, res: Response) {
    let sku = get(req.query, 'sku') as string;


    return res.send(await fetchSKUs(sku));
}
