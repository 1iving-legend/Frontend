const prompt = require("prompt-sync")(); // Import prompt-sync
let n = parseInt(prompt("Enter a number: "), 10); // Get user input and convert to integer
let harmonic = 0;

if (isNaN(n) || n <= 0) {
    console.log("Please enter a valid positive integer.");
} else {
    console.log(`Harmonic Series up to ${n}:`);
    for (let i = 1; i <= n; i++) {
        harmonic += 1 / i;
        console.log(`H${i} = ${harmonic.toFixed(4)}`);
    }
    console.log(`Nth Harmonic Number (H${n}) = ${harmonic.toFixed(4)}`);
}
