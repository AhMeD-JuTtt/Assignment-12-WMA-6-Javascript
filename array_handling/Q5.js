// 5. Write a js program to find second largest element in an array.

let arr = [-23, -45, 34, 56, -21, 100, 109, -134];
let max = Number.MIN_SAFE_INTEGER;
let scndLarge;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        scndLarge = max;
        max = arr[i];
    }
}
console.log(arr);
console.log(`Second Largest Element in array: ${scndLarge}`)