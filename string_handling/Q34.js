// 34. Write a js program to remove all occurrence of a word in given string.

let str = "My name is Muhammad Ahmed and my age is 23 years.";
let strTemp = str.split(" ");
for (let i = 0; i < strTemp.length; i++) {
    let word = strTemp[i];
    if (word == 'is') {
        delete strTemp[i];
    }
}
strTemp = strTemp.join(" ");
console.log(`Before removing all occurences of word "is" in String:\n"${str}"`)
console.log(`\nAfter removing all occurences of word "is" in String:\n"${strTemp}"`)