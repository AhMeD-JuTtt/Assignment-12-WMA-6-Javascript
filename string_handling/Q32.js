// 32. Write a js program to remove first occurrence of a word from string.

let str = "My name is Muhammad Ahmed and my age is 23 years.";
let strTemp = str.split(" ");
let occ = strTemp.indexOf('is');
delete strTemp[occ];
strTemp = strTemp.join(" ");
console.log(`Before removing the first occurrence of word "is" in String:\n"${str}":`);
console.log(`\nAfter removing the first occurrence of word "is" in String:\n"${strTemp}"`);