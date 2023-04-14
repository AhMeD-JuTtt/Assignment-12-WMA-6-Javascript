// 8. Write a js program to find total number of alphabets, digits or special character in a string.

let str = "Muhammad123@gmail.com";

function counter(s) {
    let alphaCount = 0;
    let numCount = 0;
    let spclCharCount = 0;
    let arr = [];
    for (let i = 0; i < s.length; i++) {
        if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
            alphaCount++;
        }

        if ((s[i] >= 0 && s[i] <= 9)) {
            numCount++;
        }

        if ((s[i].charCodeAt(0) >= 33 && s[i].charCodeAt(0) <= 47) || (s[i].charCodeAt(0) >= 58 && s[i].charCodeAt(0) <= 64) || (s[i].charCodeAt(0) >= 91 && s[i].charCodeAt(0) <= 96) || (s[i].charCodeAt(0) >= 123 && s[i].charCodeAt(0) <= 126)) {
            spclCharCount++;
        }
    }
    arr.push(alphaCount, numCount, spclCharCount)
    return arr;
}
let result = counter(str);
console.log(`The String "${str}" has:\n${result[0]} Alphabets\n${result[1]} Special Characters\n${result[2]} Digits.`)