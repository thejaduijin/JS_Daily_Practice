// reverse an string
const str = "abcd";

function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr(str));


// correct in alphabetical order
const str2 = "baced";

function correctOrder(str) {
    return str.split("").sort().join("");
}
console.log(correctOrder(str2));
