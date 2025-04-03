const user = {
    username: "debapriya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this - current context
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"     // context is changed
// user.welcomeMessage()

//  console.log(this);     // {}

// function chai(){
//     let username = "debapriya"
//     console.log(this.username);
    
// }

// chai()

// 'this' can be used in objects.

// const chai = function(){
//     let username = "debapriya"
//     console.log(this.username);
// }

const chai = () => {                     // Arrow function
    let username = "debapriya"
    console.log(this);
}

// chai()

() => {}     // arrow function

// const add2 = (num1, num2) => {
//     return num1+num2                 // explicit return
// }

// const add2 = (num1, num2) =>  num1+num2    // implicit return
// const add2 = (num1, num2) =>  (num1+num2)
const add2 = (num1, num2) =>  ({username: "debapriya"})    // to return object, wrap in ()
console.log(add2(3,4))