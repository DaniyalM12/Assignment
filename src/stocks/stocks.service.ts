import stocks from "../data/stock.json";
import { StockEntity } from "./stock.entity";

/**
 * Returns stocks for given type and sku.
 * @function fetchStocks
 * @param {string} sku  stock item.
 */
export async function fetchStocks(sku: string): Promise<StockEntity> {
  const stockSKUs = stocks.filter((stock) => stock.sku == sku)[0];
  return stockSKUs === undefined ? { sku, stock: 0 } : stockSKUs;
}
