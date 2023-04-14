// 26. Write a js program to replace last occurrence of a character with another in a string.

let str = "muhammadahmd1234@gmail.com";
strTemp = str.split("")
let occ = str.lastIndexOf('d');
strTemp[occ] = '?';
strTemp = strTemp.join("");
console.log(`The String before replacing last occurrence of charachter "d" with "?":\n"${str}"`)
console.log(`\nThe String after removing last occurrence of charachter "d" with "?":\n"${strTemp}"`)