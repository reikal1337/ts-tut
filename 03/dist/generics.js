"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
identityFour({ brand: "cola", type: 3 });
function getSearchProducts(products) {
    const index = 3;
    return products[index];
}
const getNext = (array, index) => {
    return array[index + 1];
};
function genericFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
genericFunction("4", { connection: "21651.156.156",
    usernaame: "lol45",
    password: "shhhhh" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
