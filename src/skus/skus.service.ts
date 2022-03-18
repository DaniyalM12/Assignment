import { fetchStocks } from "../stocks/stocks.service";
import {
  calculateTransactions,
  fetchTransactions,
} from "../transactions/transaction.service";
import { get } from "lodash";
import { SkusEntity } from "./skus.entity";
import _ = require("lodash");

/**
 * Returns stocks for given type and sku.
 * @function fetchSKUs
 * @param {string} sku  stock item.
 */
export async function fetchSKUs(sku: string): Promise<SkusEntity> {
  try {
    const sku_s: SkusEntity = { sku: sku, qty: 0 };
    // Fetching stocks
    const stocks = await fetchStocks(sku);
    // Fetching transactions
    const transactions = await fetchTransactions(sku);

    //Combining and returning result
    const quantity = await calculateTransactions(
      transactions,
      get(stocks, "stock")
    );

    //Combining and returning result
    return _.update(sku_s, ["qty"], () => quantity);
  } catch (e: any) {
    return e.message;
  }
}
