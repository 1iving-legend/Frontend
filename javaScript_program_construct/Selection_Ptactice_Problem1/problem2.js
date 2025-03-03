const prompt= require("prompt-sync")();
let day = parseInt(prompt("DAy:")); 
let month = parseInt(prompt("month"));

// Condition to check if date is in range
let isInSpring = (month === 3 && day >= 20) || (month === 6 && day <= 20) || (month > 3 && month < 6);

console.log(isInSpring ? "true" : "false");
