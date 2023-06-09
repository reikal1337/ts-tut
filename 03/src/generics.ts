const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{
    return val
}

function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string,
    type: number
}

identityFour<Bottle>({brand:"cola", type: 3})

function getSearchProducts<T>(products: T[]): T {
    const index = 3
    return products[index]
}

const getNext = <T,> (array: T[], index: number): T => {
    return array[index + 1]
}

interface Database{
    connection: string,
    usernaame: string,
    password: string
}

function genericFunction<T, U extends Database>(val1: T,val2: U):object {
    return{
        val1,
        val2
    }
}

genericFunction("4", {connection: "21651.156.156",
    usernaame: "lol45",
    password: "shhhhh"})


interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}