// 31. Write a js program to count occurrences of a word in a given string.

let str = "My name is Muhammad Ahmed and my age is 23 years.";
let strTemp = str.split(" ");
let count = 0;
for (let i = 0; i < strTemp.length; i++) {
    let word = strTemp[i];
    if (word == 'is') {
        count++;
    }
}
console.log(`Occurence of word "is" in String "${str}" is ${count} times.`)