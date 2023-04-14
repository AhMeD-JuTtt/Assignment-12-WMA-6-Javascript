// 19. Write a js program to sort array elements in ascending or descending order.

let arr = [-23, -45, 34, 56, -21, 100, 109, -134];

for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
}

let arr2 = [-23, -45, 34, 56, -21, 100, 109, -134];

for (let index = 0; index < arr2.length; index++) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] < arr2[i + 1]) {
            temp = arr2[i + 1];
            arr2[i + 1] = arr2[i];
            arr2[i] = temp;
        }
    }
}

console.log("Array in Ascending Order:\n", arr)
console.log("Array in Descending Order:\n", arr2)