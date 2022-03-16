import _ = require("lodash");
import {TransactionEntity} from "../entity/transaction.entity";
import {TransactionType} from "../../skus/utils/skus.utils";

var transactions = require('../../data/transactions.json');

export function fetchTransactions(sku: string) {
    let transactionSKUs = _.find(transactions, {sku});

    if (transactionSKUs === undefined)
        return Promise.reject(new Error("SKU does not exist ."));

    return transactions.filter((transaction: TransactionEntity) => transaction.sku === sku);
}

export async function calculateTransactions(transactions: TransactionEntity[], stock: number, quantity: number = 0): Promise<number> {
    transactions.forEach(transaction => {
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
        return Promise.reject(new Error("Nothing in stock."));
    }

    return Promise.resolve((stock - quantity));
}

