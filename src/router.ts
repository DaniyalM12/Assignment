import {Express} from "express";

import {skuRoutes} from "./skus/skus.routes";

export default function (app: Express) {
    skuRoutes(app);
}

