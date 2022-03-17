import {calculateTransactions, fetchTransactions} from "../../services/transaction.service";
import {fetchStocks} from "../../../stocks/services/stocks.service";
import {TransactionEntity} from "../../entity/transaction.entity";


describe("Get all SKU-S from transactions", () => {


    test('200-transactions', async () => {
        const data = await fetchTransactions("PGL751486/42/83");
        expect(data).toBeInstanceOf(Array);
    });

    test('200-load-transactions-from-file', async () => {
        const expectedResult = {
            sku: expect.any(String),
            type: expect.any(String),
            qty: expect.any(Number)
        };
        const data = await fetchTransactions("PGL751486/42/83");
        data.forEach((transaction: TransactionEntity) => {
            expect(transaction).toMatchObject(expectedResult);
        });


    });

    test('NO-SKU-Found', async () => {
        const expectedResult = "SKU does not exist .";

        try {
            await fetchTransactions("PGL751486/42/831");
        } catch (e: (any)) {
            expect(e.message).toBe(expectedResult)
        }

    });
    test('transactional-calculation-error', async () => {
        const expectedResult = "SKU does not exist .";
        const data = await fetchTransactions("PGL751486/42/83");
        try {
            await calculateTransactions(data, 2);
        } catch (e: (any)) {
            expect(e.message).toBe(expectedResult)
        }
    });
    test('200-do-transactional-calculation', async () => {
        const data = await fetchTransactions("PGL751486/42/83");
        const stocks = await fetchStocks("PGL751486/42/83");
        const total = await calculateTransactions(data, stocks.stock);
        expect(total).toBeGreaterThan(0);
    })

    test('200-do-transactional-calculation-for-refunding', async () => {
        const data = [{
            sku: "PGL751486/42/83",
            type: "refund",
            qty: 23
        }];
        const total = await calculateTransactions(data, 24,34);
        expect(total).toBeGreaterThan(0);
    })

});
