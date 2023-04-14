// 33. Write a js program to remove last occurrence of a word in given string.

let str = "My name is Muhammad Ahmed and my age is 23 years.";
let strTemp = str.split(" ");
let occ = strTemp.lastIndexOf('is');
delete strTemp[occ];
strTemp = strTemp.join(" ");
console.log(`Before removing the last occurrence of word "is" in String:\n"${str}":`);
console.log(`\nAfter removing the last occurrence of word "is" in String:\n"${strTemp}"`);