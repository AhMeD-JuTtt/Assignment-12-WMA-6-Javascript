// 2. Write a js program to print all negative elements in an array.

let arr = [-23, -45, 34, 56, -21, 100, 109, -134];
console.log("Negative elements of array:")
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        console.log(arr[i])
    }
}