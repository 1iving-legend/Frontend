const prompt = require("prompt-sync")(); // For user input in Node.js

function isPalindrome(num) {
    let strNum = num.toString();
    let reversed = strNum.split("").reverse().join("");
    return strNum === reversed;
}

let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));

console.log(`${num1} is ${isPalindrome(num1) ? "" : "not "}a Palindrome`);
console.log(`${num2} is ${isPalindrome(num2) ? "" : "not "}a Palindrome`);
