"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "tom",
    email: "tom@email.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "tom", isPaid: false, email: "tom@email.com" };
createUser(newUser);
function createCourse() {
    return { name: "typeScript", price: 20 };
}
var myUser = {
    _id: "123",
    name: "Tom",
    email: "tome@email.com",
    isActive: false
};
myUser.email = "tom@gmail.com";
