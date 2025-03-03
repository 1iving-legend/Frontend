const prompt= require("prompt-sync")();
let num = parseInt(prompt("Enter a number : "),10);
let isPrime = true;

if (num < 2) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(`${num} is ${isPrime ? "a Prime Number" : "not a Prime Number"}`);