// while

let i = 1
while (i <= 10) {
    // console.log(`Value of index is ${i}`);
    i = i + 2
}

let myArr = ["flash","batman","superman"]
let arr = 0
while (arr < myArr.length) {
    console.log(`Value is: ${myArr[arr]}`);
    arr += 1
}



// do-while   -   works first, then checks condition.

let score = 11
do {
    console.log(`Score is: ${score}`);
    score ++
} while (score <= 10);
