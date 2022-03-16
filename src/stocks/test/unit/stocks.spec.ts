import {fetchStocks, generateSku} from "../../services/stocks.service";


describe('Get-SKU-S-from-stocks',()=>{

    test('200-stocks-from-file',async ()=>{
        const expectedResult={
            sku: expect.any(String),
            stock: expect.any(Number)
        };
        const data =await fetchStocks("PGL751486/42/83");
        expect(data).toMatchObject(expectedResult);
    });

    test('if-stock-doesnt-exist-generate-it',async ()=>{
        const expectedResult={
            sku: expect.any(String),
            stock: expect.any(Number)
        };
        const data =await generateSku("PGL751486/42/831");
        expect(data).toMatchObject(expectedResult);
    });


});
