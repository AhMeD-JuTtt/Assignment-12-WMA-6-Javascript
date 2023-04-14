// 13. Write a js program to reverse order of words in a given string

let str = "My name is Ahmed and I am 23";
let revStr = str.split(" ").reverse().join(" ")
console.log(`Original String:\n"${str}"\n`)
console.log(`String with Reversed Order of Words:\n"${revStr}"`)