import {fetchStocks} from "../../stocks/services/stocks.service";
import {calculateTransactions, fetchTransactions} from "../../transactions/services/transaction.service";
import {get, omit} from "lodash";
import {SkusEntity} from "../entity/skus.entity";
import _ = require("lodash");

/**
 * Returns stocks for given type and sku.
 * @function fetchSKUs
 * @param {string} sku  stock item.
 */
export async function fetchSKUs(sku: string){

    try {
        let sku_s: SkusEntity = {sku: sku, qty: 0};
        // Fetching transactions
        let transactions = await fetchTransactions(sku);

        // Fetching stocks
        let stocks = await fetchStocks(sku);


        //Combining and returning result
        let quantity = await calculateTransactions(transactions, get(stocks, 'stock'));

        //Combining and returning result
        // @ts-ignore
        return _.update(sku_s, ['qty'], ()=>quantity);

    } catch (e: any) {
        return (e.message);
    }
}

