import {fetchSKU} from "./controllers/sku.controller";
import {Express} from "express";


export function skuRoutes(app: Express) {
    app.get("/skus", fetchSKU)
}
