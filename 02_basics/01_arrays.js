// Arrays - object
/* 
- In js, arrays are resizable
- Can contain a mix of different datatypes
- zero-based indexing
- Makes shallow copies
*/

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["batman", "spiderman"]
const myArr = new Array(1,2,3,4)

// console.log(myArray[4]);

// Array Methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(9)  // insertion of element at the beginning
// myArray.shift()   // deletion of element from beginning

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(20));

// const newArray = myArray.join()

// console.log(myArray);
// console.log(newArray);         //
// console.log(typeof newArray);  //string


// slice, splice

console.log("A", myArray);

const myn1 = myArray.slice(1,4)
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,4)
console.log(myn2);
console.log("C", myArray);








