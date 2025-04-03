// Immediately Invoked Function Expression

(function chai(){
    // named IIFE
    console.log("DB CONNECTED");
})();    // you have to end the iife with a ;

( (name) => {
    // unnamed IIFE
    console.log(`DB TWO CONNECTED ${name}`);
    
})('debapriya')   // function definition-function calling-argument


// to avoid problem of pollution from global scope, we use iife
// to write two IIFE one after the other, use  a ; to end the first IIFE.