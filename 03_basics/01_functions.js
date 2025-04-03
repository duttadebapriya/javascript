
function sayMyName(){
    console.log("d");
    console.log("e");
    console.log("b");
    console.log("a");
    console.log("p");
    console.log("r");
    console.log("i");
    console.log("y");
    console.log("a");
} 

// sayMyName - reference
// sayMyName()   - execution

// function add2num (num1,num2) {      // parameters - taken during function definition
//     console.log(num1+num2)
// }

function add2num (num1,num2) {      
    // let result = num1+num2
    // return result
    return num1+num2
}

const result = add2num(12,24)
// console.log("Result: ", result);

// add2num(3,"4")
// add2num("4",3)                     // arguments - taken during function calling
// add2num(3,"A")
// add2num(3,null)

function loginUserMessage(username){
    if(username === undefined){            // OR if(!username)
        console.log("Please enter an username!");
        return
    }
    return `${username} just logged in.`
}

// console.log(loginUserMessage("Debapriya"))
console.log(loginUserMessage())     // undefined
// console.log(loginUserMessage(""))

function calculateCartPrice(...num1){       // ... - rest operator
    return num1
}

function calculateCartPrice(val1,val2,...num1){       // ... - rest operator
    return num1
}

// console.log(calculateCartPrice(200,400,600))

const user = {
    username: "debapriya",
    price: "199"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}.`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: "399"
})

const myArr = [200,400,100,500]
function return2value(getArray){
    return getArray[1]
}

console.log(return2value(myArr));
