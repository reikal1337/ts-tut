"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, password, isPaid) {
}
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(20);
getUpper("lol");
signUp("tom", "tom@email.com", "dsfsdfsd", true);
loginUser("tom@email.com", "dsfsdfsd");
// function getValue (myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }
var getHello = function (s) {
    return "";
};
// const heros = ["spidy", "ironman", "batboy"]
var heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(error) {
    console.log(error);
}
function handleError(error) {
    throw new Error(error);
}
