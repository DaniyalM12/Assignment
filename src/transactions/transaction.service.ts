import { TransactionEntity } from "./transaction.entity";
import { TransactionType } from "../skus/skus.utils";

import transactions from "../data/transactions.json";

/**
 * Returns transactions for given type and sku.
 * @function fetchTransactions
 * @param {string} sku  stock item.
 */

export async function fetchTransactions(
  sku: string
): Promise<TransactionEntity[]> {
  const transactionSKUs = transactions.find(
    (transactions) => transactions.sku === sku
  );
  if (transactionSKUs === undefined)
    return Promise.reject(new Error("SKU does not exist ."));

  return transactions.filter(
    (transaction: TransactionEntity) => transaction.sku === sku
  );
}

/**
 * Returns total calculateTransactions quantity for  sku.
 * @function calculateTransactions
 * @param {TransactionEntity[]} transactions list.
 * @param {number}  stock of skus
 * @param {number} quantity to be calculated.

 */
export async function calculateTransactions(
  transactions: TransactionEntity[],
  stock: number,
  quantity = 0
): Promise<number> {
  transactions.forEach((transaction) => {
    if (transaction.type == TransactionType.ORDER) {
      quantity += transaction.qty;
    }
    if (transaction.type === TransactionType.REFUND) {
      if (quantity > transaction.qty) {
        quantity -= transaction.qty;
      }
    }
  });
  if (stock <= quantity) {
    return Promise.reject(new Error("SKU does not exist ."));
  }

  return Promise.resolve(stock - quantity);
}
