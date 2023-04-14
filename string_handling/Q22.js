// 22. Write a js program to remove last occurrence of a character from string.

let str = "muhammadahmd1234@gmail.com";
console.log(`The String before removing last occurrence of charachter "a":\n"${str}"`)
str = str.split("")
let occ = str.lastIndexOf('a');
delete str[occ];
str = str.join("");
console.log(`\nThe String after removing last occurrence of charachter "a":\n"${str}"`)