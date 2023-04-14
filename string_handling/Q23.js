// 23. Write a js program to remove all occurrences of a character from string.

let str = "muhammadahmd1234@gmail.com";
let strTemp = str.split("");

for (let i = 0; i < strTemp.length; i++) {

    let ch = strTemp[i];

    if (ch == 'a') {
        delete strTemp[i];
    }
}

strTemp = strTemp.join("");
console.log(`Before deleting all occurrences of character "a":\n"${str}"`)
console.log(`\nAfter deleting all occurrences of character "a":\n"${strTemp}"`)