// Singleton
// Object.create
// Object literals

const mySym = Symbol("Key1")



const jsUser = {
    name: "ravi",
    "full-name": "Ravi Kumar Shaw",
    [mySym]: "myKey1",
    age: 21,
    location: "Kalyani",
    email: "ddravi@google.com",
    isLoggedIn: false,
    lastLogin: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["full-name"]);
// console.log(jsUser["email"]);
// console.log(jsUser.mySym);

jsUser.email = "ddravi981@gmail.com"
// Object.freeze(jsUser)   // to lock the object and prevent any changes in it
jsUser.email = "ddravi981@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello, JsUser!");
    
}

jsUser.greeting2= function(){
    console.log(`Hello, JsUser: ${this.name}`);
    
}

console.log(jsUser.greeting);   // [Function (anonymous)]
console.log(jsUser.greeting());  
console.log(jsUser.greeting2());


