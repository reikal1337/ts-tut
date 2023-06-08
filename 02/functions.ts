function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

function signUp(name: string, email: string, password: string, isPaid: boolean) {

}

let loginUser = (email: string, password: string, isPaid: boolean = false) => {

}

addTwo(20)
getUpper("lol")
signUp("tom", "tom@email.com", "dsfsdfsd", true)
loginUser("tom@email.com", "dsfsdfsd")


// function getValue (myVal: number){
//     if(myVal > 5){
//         return true
//     }
//     return "200 ok"
// }


const getHello = (s: string): string => {
    return ""
}

// const heros = ["spidy", "ironman", "batboy"]
const heros = [1, 2, 3]


heros.map((hero):string => {
    return `hero is ${hero}`
})


function consoleError(error: string): void{
    console.log(error)
}

function handleError(error: string): never{
     throw new Error(error)
}




export {}