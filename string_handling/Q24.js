// 24. Write a js program to remove all repeated characters from a given string.

let str = "muhammadahmd1234@gmail.com";

function freqChk(s) {

    s = s.toLowerCase();
    s = s.split("");

    for (let i = 0; i < s.length; i++) {

        for (let j = i + 1; j < s.length; j++) {

            if (s[i] == s[j]) {
                delete s[j];
            }
        }
    }

    s = s.join("");
    return s
}

let result = freqChk(str)
console.log(`Before removing all repeated characters from the String:\n"${str}"`)
console.log(`\nAfter removing all repeated characters from the String:\n"${result}"`)