/**
 * Returns stocks for given type and sku.
 * @function fetchStocks
 * @param {string} sku  stock item.
 * @param {list}  stocks list
 */
import {StockEntity} from "./stock.entity";


export async function fetchStocks(sku: string, stocks: StockEntity[]): Promise<StockEntity> {
  const stockSKUs = stocks.filter((stock) => stock.sku == sku)[0];
  return stockSKUs === undefined ? {sku, stock: 0} : stockSKUs;
}
