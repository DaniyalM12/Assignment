import _ = require("lodash");

var stocks = require('../../data/stock.json');

/**
 * Returns stocks for given type and sku.
 * @function fetchStocks
 * @param {string} sku  stock item.
 */
export async function fetchStocks(sku: string) {
    let stockSKUs = _.find(stocks, {sku});
    return (stockSKUs === undefined)?{sku, stock: 0}:stockSKUs;
}




