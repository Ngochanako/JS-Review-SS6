"use strict";
let arr = [1, 3, 7, 4, 6];
function isPrime(n) {
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return n > 1;
}
function checkArr(arr) {
    for (let btn of arr) {
        if (!isPrime(btn)) {
            return false;
        }
    }
    return true;
}
console.log(checkArr(arr));
