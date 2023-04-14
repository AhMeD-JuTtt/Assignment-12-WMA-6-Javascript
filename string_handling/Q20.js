// 20. Write a js program to count frequency of each character in a string.

let str = "muhammadahmd1234@gmail.com";

function freqChk(s) {

    s = s.toLowerCase();
    s = s.split("");
    let occ = [];
    let checkedChars = [];

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
    console.log(`Frequencies of Characters in the String "${str}":`)
    for (let i = 0; i < checkedChars.length; i++) {
        console.log(`"${checkedChars[i]}": ${occ[i]}`)
    }

}

freqChk(str)