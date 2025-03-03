const prompt= require("prompt-sync")();
let a = parseInt(prompt("a"));
let b = parseInt(prompt("b"));
let c = parseInt(prompt("c"));

// Perform arithmetic operations
let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

// Find Maximum Value
let maxValue = op1;
if (op2 > maxValue) maxValue = op2;
if (op3 > maxValue) maxValue = op3;
if (op4 > maxValue) maxValue = op4;

// Find Minimum Value
let minValue = op1;
if (op2 < minValue) minValue = op2;
if (op3 < minValue) minValue = op3;
if (op4 < minValue) minValue = op4;

// Print results
console.log(`Results:`);
console.log(`1. a + b * c  = ${op1}`);
console.log(`2. a % b + c  = ${op2}`);
console.log(`3. c + a / b  = ${op3}`);
console.log(`4. a * b + c  = ${op4}`);
console.log(`Maximum Value: ${maxValue}`);
console.log(`Minimum Value: ${minValue}`);