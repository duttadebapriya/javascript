// for-of

// ["","",""]
// [{},{},{}]

const myArr = [1,2,3,4,5]
for (const num of myArr) {
    // console.log(num);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps - object that hols key-value pairs

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {                // maps are iterable
    console.log(key,' : ',value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'BGMI'
}

// for (const [key,value] of myObj) {
//     console.log(key, ':', value);
// }


// for-of doesn't work for objects
