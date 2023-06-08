"use strict";
// class User {
//     email : string
//     private name: string
//     readonly city: string = ""
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple.${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(count) {
        if (count <= 1) {
            throw new Error("Already have 1 course!");
        }
        this._courseCount = count;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const tommy = new User("tommy@email.com", "tommy");
// tommy.city = "Klp"
