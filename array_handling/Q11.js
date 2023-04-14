// 11. Write a js program to count frequency of each element in an array.

let arr = [20, 20, 15, 17, 45, 20, 20, 45, 100, 103];

for (let i = 0; i < arr.length; i++) {

    let count = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }
    console.log(`${arr[i]} repeats ${count} times.`)
}