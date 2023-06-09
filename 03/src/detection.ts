function detectType(val: number | string ){
        if(typeof val === "string"){
            return val.toUpperCase()
        }
        return val + 55
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID")
        return
    }
    return id.toLocaleLowerCase()
}

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAcc(acc: User | Admin): boolean {
    if("isAdmin" in acc){
        return acc.isAdmin
    }
    return false
}

function logValue(x: Date | string): void {
    if(x instanceof Date){
        console.log(x.toUTCString())
    }else{
        console.log(x.toUpperCase())
    }
}

type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird): string{
    if(isFish(pet)){
        pet
        return "fish food"
    }else {
        pet
        return "bird food"
    }
}


interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square",
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius
    }if(shape.kind === "square"){
        return shape.side * shape.side
    }
    
}

function getArea(shape: Shape): number{
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius
        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.width * shape.length
        default:
            const _defaultshape: never = shape
            return _defaultshape
    }
}


