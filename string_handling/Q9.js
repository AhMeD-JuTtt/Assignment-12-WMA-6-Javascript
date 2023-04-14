// 9. Write a js program to count total number of vowels and consonants in a string.

let str = "Muhammad Ahmed";

function counter(s) {

    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    let total = [];
    let vowelsCount = 0;
    let consonantsCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelsCount++;
        } else if (str[i].charCodeAt(0) == 32) {
            continue;
        } else {
            consonantsCount++;
        }
    }
    total.push(vowelsCount, consonantsCount);
    return total;
}

let result = counter(str);
console.log(`The String "${str}" contains:\n${result[0]} Vowels\n${result[1]} Consonants`)