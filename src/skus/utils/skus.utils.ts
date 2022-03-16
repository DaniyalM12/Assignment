import _ = require("lodash");

export enum TransactionType {
    ORDER="order",
    REFUND="refund"
}



export function hasDuplicates(array:any) {
    return _.some(array, function(elt, index) {
        return array.indexOf(elt) !== index;
    });
}

