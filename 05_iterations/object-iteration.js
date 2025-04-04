const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObj) {
        // console.log(`${key} shortcut is for ${myObj[key]}`);
    }

/* 
output - js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/


const programming = ['js','ruby','java','python','cpp']
for (const key in programming) {     
    // console.log(key);
}
/*
output - 0
1
2
3
4
*/

for (const key in programming) {     
    // console.log(programming[key]);
}
/*
o/p - js
ruby
java
python
cpp
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")

for (const key in map) {
    // console.log(map[key]);
}

