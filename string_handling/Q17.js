// 17. Write a js program to count occurrences of a character in given string.

let str = "Muhammad Ahmed";
let count = 0;
for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (ch == 'd') {
        count++;
    }
}
console.log(`Occurence of "d" in String "${str}" is ${count}.`)