// #Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// #Reference(Non-primitive)

// Array, Objects, Functions
 const heroes = ["Shaktimaan", "SpiderMan", "Batman"]
let myObj = {
    name: "debapriya",
    age: 20,
}

const myFunction = function(){
    console.log("Hello, World!");
}

console.log(typeof (heroes));
console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof anotherId);
