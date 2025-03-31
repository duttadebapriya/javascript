const accountId = 123221104025
let accountEmail = "debapriya@gmail.com"
var accountPw = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 25 //not allowed


accountEmail ="hc@hc.com"
accountPw ="1234567890"
accountCity ="Bangalore"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPw,accountCity,accountState])  //The console.table method is used to display the values in a tabular format.