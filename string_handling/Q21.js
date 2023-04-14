// 21. Write a js program to remove first occurrence of a character from string.

let str = "muhammadahmd1234@gmail.com";
console.log(`The String before removing first occurrence of charachter "a":\n"${str}"`)
str = str.split("")
let occ = str.indexOf('a');
delete str[occ];
str = str.join("");
console.log(`\nThe String after removing first occurrence of charachter "a":\n"${str}"`)