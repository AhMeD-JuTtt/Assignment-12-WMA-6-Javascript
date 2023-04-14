// 12. Write a js program to print all unique elements in the array.

let arr1 = [20, 20, 15, 17, 45, 20, 20, 45, 100, 103];
let arr = [20, 20, 15, 17, 45, 20, 20, 45, 100, 103];
let unique = [];
for (let i = 0; i < arr.length; i++) {

    let count = 0;

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] == arr[j]) {
            count++;
            delete arr[j]
        }
    }
    if (count == 0) {
        unique.push(arr[i]);
    }
}


console.log(`Given Array:\n"${arr1}"`)
console.log(`\nUnique Elements from the Array:\n"${unique}"`)