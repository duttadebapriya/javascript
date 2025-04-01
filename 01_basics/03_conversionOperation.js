let score = "dd"
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(typeof(valueInNumber))
//console.log(valueInNumber)

/* "33" -> 33
 "33abc" -> NaN
 true -> 1, false -> 0
*/


let isLoggedIn = ""

let booleanisLoggedIn = Boolean(isLoggedIn)
//console.log(booleanisLoggedIn);

/*1 -> true, 0 -> false
 "" -> false, "dd" -> true
*/


let someNumber = 36
let stringNumber = String(someNumber)
//console.log(stringNumber);
// console.log(typeof(stringNumber))


// ******************* Operations *********************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2%2)
// console.log(2**2)

let str1 = "hello, "
let str2 = "ravi!"
let str3 = str1+str2
//console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+ 2 +2);
// console.log(1+ 2 +"2");

// console.log(+true); //1

// let num1,num2,num3
// num1 = num2 = num3 = 2+2

let gameCounter = 100
gameCounter++;  //postfix
++gameCounter;  //prefix
console.log(gameCounter);