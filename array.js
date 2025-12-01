// reverse an array

const arr = [1, 2, 3, 4, 5];

// function reverseArr(arr) {
//     const newArr = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i])
//     }
//     return newArr;
// }
// console.log(reverseArr(arr));


// second way
function reverseArr(arr) {
    let temp;
    for (let i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - (i + 1)];
        arr[arr.length - (i + 1)] = temp;
    }

    return arr;
}
console.log(reverseArr(arr));