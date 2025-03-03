function getRandomThreeDigit() {
    return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}

// Generate 5 random numbers
let numbers = [getRandomThreeDigit(), getRandomThreeDigit(), getRandomThreeDigit(), getRandomThreeDigit(), getRandomThreeDigit()];

let minValue = Math.min(...numbers);
let maxValue = Math.max(...numbers);

console.log("Random Numbers:", numbers);
console.log("Minimum Value:", minValue);
console.log("Maximum Value:", maxValue);
