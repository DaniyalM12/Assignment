import _ = require("lodash");

var stocks = require('../../data/stock.json');

/**
 * Returns stocks for given type and sku.
 * @function fetchStocks
 * @param {string} sku  stock item.
 */
export async function fetchStocks(sku: string) {
    let stockSKUs = _.find(stocks, {sku});
    if (stockSKUs === undefined) {
        return generateSku(sku);
    } else return stockSKUs;
}

/**
 * Returns stock for given type and sku.
 * @function generateSku
 * @param {string} sku  stock item.
 */
export function generateSku(sku: string) {
    return {sku, stock: 0}
}


