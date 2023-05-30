"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function merge(collection1, collection2) {
    var merged = [];
    var i = 0;
    var j = 0;
    if (collection1.length === 0 && collection2.length === 0) {
        return merged;
    }
    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] <= collection2[j]) {
            merged.push(collection1[i]);
            i++;
        }
        else {
            merged.push(collection2[j]);
            j++;
        }
    }
    while (i < collection1.length) {
        merged.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        merged.push(collection2[j]);
        j++;
    }
    return merged;
}
exports.default = merge;
merge([1, 2, 5], [4, 2, 3]);
