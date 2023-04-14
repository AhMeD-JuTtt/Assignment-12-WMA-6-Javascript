// 14. Write a js program to delete all duplicate elements from an array.

let arr1 = [20, 20, 15, 17, 45, 20, 20, 45, 100, 103];
let arr = [20, 20, 15, 17, 45, 20, 20, 45, 100, 103];
let dltDupEle = [];
for (let i = 0; i < arr.length; i++) {

    let count = 0;
    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] == arr[j]) {
            delete arr[j]
            count++;
        }
    }
    if (count > 0) {
        delete arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
        dltDupEle.push(arr[i]);
    }
}


console.log(`Given Array:\n"${arr1}"`)
console.log(`\nAfter deleting all duplicate Elements from the Array:\n"${dltDupEle}"`)