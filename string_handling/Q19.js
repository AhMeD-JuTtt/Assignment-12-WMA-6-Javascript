// 19. Write a js program to find lowest frequency character in a string.

let str = "Googlly";

function freqChk(s) {

    s = s.toLowerCase();
    s = s.split("");
    let occ = [];
    let checkedChars = [];
    let lowFreq = Number.MAX_SAFE_INTEGER;
    let lowFreqChar = '';

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
        if (occ[i] < lowFreq) {
            lowFreq = occ[i];
        }
    }

    lowFreqChar = checkedChars[occ.indexOf(lowFreq)];

    return lowFreqChar;
}

result = freqChk(str);
console.log(`The lowest frequency character in the String "${str}" is "${result}".`)