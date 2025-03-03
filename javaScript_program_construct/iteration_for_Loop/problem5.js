const prompt= require("prompt-sync")();
let num = parseInt(prompt(),10);
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial *= i;
}

console.log(`${num}! = ${factorial}`);