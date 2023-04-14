// 3. Write a js program to find sum of all array elements. 

let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(`The sum of all array elements is ${sum}.`)