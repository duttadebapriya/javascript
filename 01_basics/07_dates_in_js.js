// Dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);    //object

// let myDate1 = new Date(2023,0,23)    // Mon Jan 23 2023
// let myDate1 = new Date(2023,0,23,5,3)
// console.log(myDate1.toLocaleString());   // 1/23/2023, 5:03:00 AM

// let myDate1 = new Date("2023-03-18")
// console.log(myDate1.toLocaleString());     // 3/18/2023, 12:00:00 AM

let myDate1 = new Date("08-09-2003")
// console.log(myDate1.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate = new Date()
console.log(newdate.getMonth());
console.log(newdate.getDay());

// console.log(`${newdate.getDate()} and the time is ${newdate.getTime()}`);

newdate.toLocaleString('default',{
    weekday: "narrow",
})