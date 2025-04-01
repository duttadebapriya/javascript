const name = "ravi"
const repoCount = 12

// console.log(name+repoCount);

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}.`);  //string interpolation

const gameName = new String('deba-priya-com')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('a'));

const newstr = gameName.substring(0,4)
console.log(newstr);
const str2 = gameName.slice(0,5)
console.log(str2);
const str3 = gameName.slice(-8,4)
console.log(str3);

const str4 = "    debo    "
console.log(str4);
console.log(str4.trim());

const url = "https://dd18.com/dd%20dutta"

console.log(url.replace('%20','-'));
  
console.log(url.includes('dd'));
console.log(url.includes('sunday'));

console.log(gameName.split('-'));
