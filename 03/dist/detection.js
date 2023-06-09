"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toUpperCase();
    }
    return val + 55;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLocaleLowerCase();
}
function isAdminAcc(acc) {
    if ("isAdmin" in acc) {
        return acc.isAdmin;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius;
    }
    if (shape.kind === "square") {
        return shape.side * shape.side;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.length;
        default:
            const _defaultshape = shape;
            return _defaultshape;
    }
}
