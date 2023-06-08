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

    protected _courseCount = 1

    constructor(
        public email: string,
        public name: string,
        // private userId: number
        ){
    }

    private deleteToken(){
        console.log("Token deleted")
    }

    get getAppleEmail(): string{
        return `apple.${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(count: number) {
        if(count <= 1){
            throw new Error("Already have 1 course!")
        }
        this._courseCount = count
    } 

}


class SubUser extends User {
    isFamily:  boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const tommy = new User("tommy@email.com","tommy")
// tommy.city = "Klp"