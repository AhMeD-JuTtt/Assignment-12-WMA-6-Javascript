// 6. Write a js program to count total number of even and odd elements in an array.

let arr = [20, 30, 15, 17, 45, 50, 2, 5, 100, 103, 3123, 435];
let countEven = 0;
let countOdd = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        countEven++;
    } else {
        countOdd++;
    }
}

console.log(`Given Array:\n${arr}`)
console.log(`\nNumber of Even Elements:\n${countEven}`)
console.log(`\nNumber of Odd Elements:\n${countOdd}`)