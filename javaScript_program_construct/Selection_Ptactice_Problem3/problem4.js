const prompt= require("prompt-sync")();
let choice = parseInt(prompt());
let value = parseFloat(prompt());

// Perform unit conversions using switch-case
switch (choice) {
    case 1:
        console.log(`${value} feet = ${value * 12} inches`);
        break;
    case 2:
        console.log(`${value} feet = ${(value * 0.3048).toFixed(4)} meters`);
        break;
    case 3:
        console.log(`${value} inches = ${(value / 12).toFixed(4)} feet`);
        break;
    case 4:
        console.log(`${value} meters = ${(value / 0.3048).toFixed(4)} feet`);
        break;
    default:
        console.log("Invalid choice! Enter 1 for Feet to Inch, 2 for Feet to Meter, 3 for Inch to Feet, 4 for Meter to Feet.");
}