// 4. Write a js program to find maximum and minimum element in an array.

let arr = [-23, -45, 34, 56, -21, 100, 109, -134];
let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log(arr);
console.log(`Maximum: ${max}\nMinimum: ${min}`)