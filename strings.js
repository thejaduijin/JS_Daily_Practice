// reverse an string

const str = "abcd";

function reverseStr(str){
    return str.split("").reverse().join(""); 
}
console.log(reverseStr(str));
