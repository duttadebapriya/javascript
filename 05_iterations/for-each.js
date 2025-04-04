const coding = ["java","cpp","python","javascript","ruby"]
// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {    // using arrow function, since it is callback func. ,it doesn't have a name.
//     console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        lang_name: "JavaScript",
        lang_file: "js"
    },
    {
        lang_name: "Java",
        lang_file: "java"
    },
    {
        lang_name: "Python",
        lang_file: "py"
    }
]
myCoding.forEach( (item) => {
    console.log(item.lang_name);
})
