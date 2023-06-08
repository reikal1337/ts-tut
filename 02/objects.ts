const User = {
    name: "tom",
    email: "tom@email.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}

let newUser = {name: "tom", isPaid: false, email: "tom@email.com"}

createUser(newUser)


function createCourse():{name: string, price: number}{
    return {name: "typeScript", price: 20}
}

// type User = {
//     name: string,
//     email: string,
//     isActive: boolean,
// }

// function createNewUser(user: User): User {
//     return user
// }

// createNewUser({name: "Tom", email: "tom@email.com", isActive: true})


type User = {
   readonly _id: string,
    name: string,
    email: string,
    isActive: boolean
    cardDetails?: number
}

let myUser: User = {
    _id: "123",
    name: "Tom",
    email: "tome@email.com",
    isActive: false
}

myUser.email = "tom@gmail.com"
// myUser._id = "1"

type cardNumber = {
    cardNr: string
}

type cardDate = {
    cardDate: string
}


type cardDetails = cardNumber & cardDate & {
    cvv: number
}


export {}