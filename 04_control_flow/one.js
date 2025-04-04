// IF

if (true) {           // executed
    //
}

if (false) {         // not executed
    //               
}

const isUserLoggedIn = true
const temp = 41

// if (temp<50) {
//     console.log("less than 50");
// }
// else
// console.log("temperature is greater than 50");


// if (2 == "2") {
//     console.log("executed");       
// }

// <, >, <=, >=, ==, !=, === (checks the type also-strict checking)

// const score = 200
// if (score>100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 1000
// if (balance>500) console.log("yes");       // implicit scope

// if (balance>500) console.log("yes"), console.log("yes-2");   // don't do like this!



// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance<750) {
//     console.log("less than 750");
// }
// else if (balance<900) {
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userLoggedIn && debitCard) {
    console.log("Allowed to buy courses!");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in!");
}