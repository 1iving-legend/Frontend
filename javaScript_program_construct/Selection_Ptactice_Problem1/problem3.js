const prompt= require("prompt-sync")();
let year = parseInt(prompt());

// Leap Year Check Conditions
let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeap ? "Leap Year" : "Not a Leap Year");