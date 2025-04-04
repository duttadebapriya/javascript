// const userEmail = "dd@gmail.com"    //truthy
// if (userEmail) {
//     console.log("Got user email!");
// }
// else
// {
//     console.log("Don;t have user email!");
// }



// const userEmail = ""      //falsy
// if (userEmail) {
//     console.log("Got user email!");
// }
// else
// {
//     console.log("Don't have user email!");
// }


// false, 0, "", BigInt 0n, null, undefined, NaN
// all except these are truthy values

// truthy values
// "0", 'false', " ", [], {}, function(){}




// const userEmail = []                // check that empty array is truthy
// if (userEmail.length === 0) {
//     console.log("Array is empty!");
// }

// const empObj = {}                     // check that empty object is truthy
// if (Object.keys(empObj).length === 0) {
//     console.log("Object is empty!");
// }



// Nullish Coalescing Operator(??) - null, undefined
let val1;
val1 = 5 ?? 10
// console.log(val1);     //5

val1 = null ?? 10
// console.log(val1);    //10

val1 = undefined ?? 36
// console.log(val1);     //36



// Ternary Operator
// condition ? true : false


const iceTea = 100
iceTea <=80 ? console.log("less than 80!") : console.log("more than 80!");


