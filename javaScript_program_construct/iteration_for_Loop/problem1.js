


const prompt = require("prompt-sync")(); // Import prompt-sync
const num1 = parseInt(prompt("Enter a number: "), 10); // Convert input to an integer

console.log(`Table of Powers of 2 up to 2^${num1}:`);
for (let i = 0; i <= num1; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
