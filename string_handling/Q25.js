// 25. Write a js program to replace first occurrence of a character with another in a string.

let str = "muhammadahmd1234@gmail.com";
strTemp = str.split("")
let occ = str.indexOf('d');
strTemp[occ] = '?';
strTemp = strTemp.join("");
console.log(`The String before replacing first occurrence of charachter "d" with "?":\n"${str}"`)
console.log(`\nThe String after removing first occurrence of charachter "d" with "?":\n"${strTemp}"`)