import {calculateTransactions, fetchTransactions} from "../../src/trancsactions/services/transaction.service";
import {fetchStocks} from "../../src/stocks/services/stocks.service";


describe("Get all skus from transactions", () => {

    test('200-transactions', async () => {
        const data = await fetchTransactions("PGL751486/42/83");
        expect(data).toBeInstanceOf(Array);
    })
    test('200-do-transactional-calculation', async () => {
        const data = await fetchTransactions("PGL751486/42/83");
        const stocks = await fetchStocks("PGL751486/42/83");
        const total = await calculateTransactions([], 20);
        expect(total).toBeGreaterThan(0);
    })

});
