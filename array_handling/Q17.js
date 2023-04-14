// 17. Write a js program to put even and odd elements of array in two separate array.

let arr = [20, 30, 15, 17, 45, 50, 2, 5, 100, 103];
let even = [];
let odd = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even.push(arr[i]);
    } else {
        odd.push(arr[i]);
    }
}

console.log(`Given Array:\n${arr}`)
console.log(`\nEven Elements:\n${even}`)
console.log(`\nOdd Elements:\n${odd}`)