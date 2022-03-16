import _ = require("lodash");
import {hasDuplicates} from "../../skus/utils/skus.utils";

var stocks = require('../../data/stock.json');

export async function fetchStocks(sku: string) {

    if (hasDuplicates(stocks)){
        return _.filter(stocks, (stock) => stock.sku === sku)
    }

    let stockSKUs = _.find(stocks, {sku});

    if (stockSKUs === undefined)
        return Promise.reject(new Error("SKU does not exist ."));

    // return _.filter(stocks, (stock) => stock.sku === sku);
    return stockSKUs;
}


