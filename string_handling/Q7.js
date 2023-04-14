// 7. Write a js program to toggle case of each character of a string.

let str = "My NaMe Is MuHaMmAd aHmED.";
let str2 = [];
// Before toggling the case of each character of a string.:

console.log(`Before toggling the case of each character of a string.:\n"${str}"`)

// After toggling the case of each character of a string.:

for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
        str2.push(str[i].toUpperCase())
    }
    if (str[i] >= "A" && str[i] <= "Z") {
        str2.push(str[i].toLowerCase())
    }
    if (str[i].charCodeAt(0) == 32) {
        str2.push(" ");
    }
}

str2 = str2.join("");

console.log(`\nAfter toggling the case of each character of a string.:\n"${str2}"`)