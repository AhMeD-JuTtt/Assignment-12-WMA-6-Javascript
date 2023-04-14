// 16. Write a js program to search all occurrences of a character in given string.

let str = "Muhammad Ahmed";
let count = 0;
let occ = [];
for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (ch == 'd') {
        count++;
        occ.push(i)
    }
}
console.log(`Occurence of "d" in String "${str}" is ${count} at following indexes in the String:\n${occ}`)