// 22. Write a js program to right rotate an array.

let arr = [1, 2, 4, 5];
console.log("Before rotating Array to right", arr)
let lastElmt = arr.pop();
arr.unshift(lastElmt);
console.log("\nAfter rotating Array to right", arr)