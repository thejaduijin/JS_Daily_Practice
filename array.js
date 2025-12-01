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
// console.log(reverseArr(arr));



//find largest element

const arr2 = [45, 85, 122, 1, 6, 8];

function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}
// console.log(findLargest(arr2));


//find second largest element

// const arr2 = [10, 5, 10];

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -1;
    let temp;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}
console.log(findSecondLargest(arr2));