// 38. Write a js program to remove all extra blank spaces from given string.

let str = "My       name     is Muhammad    Ahmed."
let strTemp = str.split(" ");
let newstr = [];
for (let i = 0; i < strTemp.length; i++) {
    if (!strTemp[i] == '') {
        newstr.push(strTemp[i])
    }
}
newstr = newstr.join(" ");
console.log(`Before removing all extra blank spaces from the String:\n"${str}"`)
console.log(`\nAfter removing all extra blank spaces from the String:\n"${newstr}"`)