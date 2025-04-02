const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)  // adds the 2nd array but as an array

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const mod_arr = marvel_heroes.concat(dc_heroes)  // adds both the arrays together as elements
// console.log(mod_arr);    // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_heroes = [...marvel_heroes, ...dc_heroes]   // 'spread' - almost same as concat
console.log(all_heroes);

const arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
let real_arr = arr.flat(Infinity)   // returns all elements concatenated in a single array
console.log(real_arr);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "ravi"}));  // interesting case, output - []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));  // returns a new array from a set of elements

// **************************************************************************************************

