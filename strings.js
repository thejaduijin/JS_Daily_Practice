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


// count frequency of char 
const str3 = "abbcaadefhh";

function countFrequency(str) {
    let count = 1;
    let req = {}

    for (let char of str) {
        // if (req.hasOwnProperty(char)) {
        if (req[char]) {
            req[char] += 1;
        } else {
            req[char] = count;
        }
    }
    return req;
}

console.log(countFrequency(str3));
