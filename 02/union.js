var score = 33;
score = "33";
var tom = { name: "Tom", id: 55 };
tom = { username: "tomMod", id: 55 };
// function getDbId (id: number | string){
//     console.log(`Db id is : ${id}`)
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toUpperCase();
    }
}
var data = [1, 2, 3, 4, "5"];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew"
