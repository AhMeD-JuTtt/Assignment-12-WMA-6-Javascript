// 10. Write a js program to count total number of words in a string.

let str = "My name is Muhammad Ahmed and I am 23."

function counter(s) {
    let words = s.split(" ");
    let len = words.length;
    return len;
}

let result = counter(str)
console.log(`The String "${str}" contains ${result} words.`)