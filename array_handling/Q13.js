// 13. Write a js program to count total number of duplicate elements in an array.

let arr1 = [20, 20, 15, 17, 45, 20, 20, 45, 100, 103];
let arr = [20, 20, 15, 17, 45, 20, 20, 45, 100, 103];
let duplicate = [];
for (let i = 0; i < arr.length; i++) {

    let count = 0;

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] == arr[j]) {
            count++;
            delete arr[j]
        }
    }
    if (count > 0) {
        duplicate.push(arr[i]);
    }
}


console.log(`Given Array:\n"${arr1}"`)
console.log(`\nDuplicate Elements from the Array:\n"${duplicate}"`)