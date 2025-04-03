// const tinderUser = new Object()   // singleton object
const tinderUser = {}    // non-singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "debapriya",
            lastname: "dutta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "dd@gmail.com"
    },
    {
        id: 1,
        email: "dd@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  // each key and value pair separated into an array

// console.log(tinderUser.hasOwnProperty('name'));


const course = {
    cname: "JS in hindi",
    price: "999",
    cteacher: "hitesh-sir"
}


// course.cname

const {cname: name} = course
// console.log(cname);
console.log(name);

/* const navbar = ({company}) => { // destructuring 

 }                                       in

 navbar(company = "debapriya")         react
 */



// API   -    apna kaam kisi aur ke sar pe dalna

// {
//     "name": "debapriya",                    // JSON 1st format
//     "cname": "JS in hindi",
//     "price": "free"
// }

[                                             // JSON 2nd format
    {},                                       // JSON -> Js object notation
    {},
    {}
]