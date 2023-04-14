// 7. Write a js program to count total number of negative elements in an array.

let arr = [-23, -45, 34, 56, -21, 100, 109, -134];
let count = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        count++;
    }
}

console.log(`Given Array:\n${arr}`)
console.log(`\nTotal number of negative elements in array: ${count}.`)