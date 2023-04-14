// 20. Write a js program to sort even and odd elements of array separately.

let arr = [20, 30, 15, 17, 45, 50, 2, 5, 100, 103, 3123, 435];
let even = [];
let odd = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        even.push(arr[i]);
    } else {
        odd.push(arr[i]);
    }
}

for (let index = 0; index < even.length; index++) {
    for (let i = 0; i < even.length; i++) {
        if (even[i] > even[i + 1]) {
            temp = even[i + 1];
            even[i + 1] = even[i];
            even[i] = temp;
        }
    }
}

for (let index = 0; index < odd.length; index++) {
    for (let i = 0; i < odd.length; i++) {
        if (odd[i] > odd[i + 1]) {
            temp = odd[i + 1];
            odd[i + 1] = odd[i];
            odd[i] = temp;
        }
    }
}

let endResult = even.concat(odd);
console.log("Original Array:\n", arr)
console.log("After sorting array:\n", endResult)