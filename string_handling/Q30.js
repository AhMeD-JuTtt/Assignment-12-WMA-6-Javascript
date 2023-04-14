// 30. Write a js program to search all occurrences of a word in given string.

let str = "My name is Muhammad Ahmed and my age is 23 years.";
let strTemp = str.split(" ");
let count = 0;
let occ = [];
for (let i = 0; i < strTemp.length; i++) {
    let word = strTemp[i];
    if (word == 'is') {
        count++;
        occ.push(i)
    }
}
console.log(`Occurence of word "is" in String "${str}"\nis found at following indexes in the String:\n${occ}`)