import {Request, Response} from "express";
import {get} from "lodash";
import {fetchSKUs} from "../services/skus.service";
import log from "../../logger";
import {SkusEntity} from "../entity/skus.entity";

export async function fetchSKU(req: Request, res: Response) {
    let sku = get(req.query, 'sku') as string;
    const result = await fetchSKUs(sku);
    log.info(result);
    return res.send(result);





}
