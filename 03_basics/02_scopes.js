// var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("INNER: ",a);
    
}

//  console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "debapriya"
    function two(){
        const website = "youtube"
        console.log(username);    
    }
    // console.log(website);
    two()
}

// one()

if (true) {
    const username = "debapriya"
    if(username === "debapriya"){
        const website = " youtube"
        // console.log(username+website);
    }
    // console.log(website); 
}
// console.log(username);

// **************************INTERESTING********************************

console.log(add1(5))
function add1(num){       // function
    return num+1
}

add2(5)
const add2 = function(num){      // expression
    return num+2
}


/*
Hoisting
--
*/