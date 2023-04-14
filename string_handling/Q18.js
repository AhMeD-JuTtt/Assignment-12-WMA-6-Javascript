// 18. Write a js program to find highest frequency character in a string.

let str = "muhammadahmd1234@gmail.com";

function freqChk(s) {

    s = s.toLowerCase();
    s = s.split("");
    let occ = [];
    let checkedChars = [];
    let highFreq = 0;
    let highFreqChar = '';

    for (let j = 0; j < s.length; j++) {

        let count = 0;
        let ch = s[j];

        if (!checkedChars.includes(ch)) {

            checkedChars.push(ch);

            for (let k = 0; k < s.length; k++) {

                if (s[k] == ch) {
                    count++;
                }
            }

            occ.push(count)

        } else {

            continue

        }
    }

    for (let i = 0; i < occ.length; i++) {
        if (occ[i] > highFreq) {
            highFreq = occ[i];
        }
    }

    highFreqChar = checkedChars[occ.indexOf(highFreq)];

    return highFreqChar;
}

result = freqChk(str);
console.log(`The highest frequency character in the String "${str}" is "${result}".`)