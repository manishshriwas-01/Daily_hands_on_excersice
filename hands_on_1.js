// console.log("hello")]]
"use strict"

function buzzNumber(num) {
    if (typeof num !== "number" || !Number.isInteger(num)) {
        return "Error: Input must be an integer.";
    }

    if (num % 15 === 0) return "FizzBuzz";
    if (num % 3 === 0) return "Fizz";
    if (num % 5 === 0) return "Buzz";

    return num;

}
function celciToFerh(celsius){
    if(typeof(celsius)!=="number"){
        return "Error : input must be number";
    }

    let temp= (9*celsius)/5+32;

    return temp;
}

function ferhTocel(fehr){
    if(typeof(fehr)!="number"){
        return "Error : input must be number";
    }
    let temp=(fehr-32)*5/9;
}
console.log(buzzNumber("fefe"));
console.log(celciToFerh(40));