import {fetchStocks} from "./services/stocks.service";


describe('Get all skus from stocks',()=>{

    test('NO-SKU-Found',async ()=>{
        const expectedResult = "SKU does not exist .";

        try {
            await fetchStocks("PGL751486/42/831");
        }catch (e:(any)) {
            expect(e.message).toBe(expectedResult)
        }

    });

    test('200-stocks',()=>{
        const expectedResult={
            sku:"PGL751486/42/83",
            stock:1484
        };
        return fetchStocks("PGL751486/42/83").then((data)=>{
            expect(data).toEqual(expectedResult);
        });


    });


});
