// 21. Write a js program to left rotate an array.

let arr = [1, 2, 4, 5];
console.log("Before rotating Array to left", arr)
let firstElmt = arr.shift();
arr.push(firstElmt);
console.log("\nAfter rotating Array to left", arr)