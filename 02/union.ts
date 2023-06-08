let score: number | string = 33

score = "33"

type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}

let tom: User | Admin = {name: "Tom", id: 55}

tom = {username: "tomMod", id: 55}

// function getDbId (id: number | string){
//     console.log(`Db id is : ${id}`)
// }

getDbId(3)
getDbId("3")

function getDbId (id: number | string){
    if(typeof id === "string"){
        id.toUpperCase()
    }
}

const data: (number | string )[] = [1,2,3,4,"5"]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"