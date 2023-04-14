// 28. Write a js program to find first occurrence of a word in a given string.

let str = "My name is Muhammad Ahmed and my age is 23 years.";
let strTemp = str.split(" ");
let occ = strTemp.indexOf('is');
console.log(`The first occurrence of word "is" in String "${str}" is at index ${occ}.`);