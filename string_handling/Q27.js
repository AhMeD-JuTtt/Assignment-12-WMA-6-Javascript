// 27. Write a js program to replace all occurrences of a character with another in a string.

let str = "muhammadahmd1234@gmail.com";
let strTemp = str.split("");

for (let i = 0; i < strTemp.length; i++) {

    let ch = strTemp[i];

    if (ch == 'a') {
        strTemp[i] = '?';
    }
}

strTemp = strTemp.join("");
console.log(`Before replacing all occurrences of character "a" with "?":\n"${str}"`)
console.log(`\nAfter replacing all occurrences of character "a" with "?":\n"${strTemp}"`)