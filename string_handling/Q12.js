// 12. Write a js program to check whether a string is palindrome or not.

let str = "Level";

function chkPalindrome(s) {
    s = s.toLowerCase();
    let s2 = s.split("").reverse().join("");
    if (s2 == s) {
        console.log(`Yes, The String "${str}" is Palindrome.`)
    } else {
        console.log(`No, The String "${str}" is not Palindrome.`)
    }
}

chkPalindrome(str);