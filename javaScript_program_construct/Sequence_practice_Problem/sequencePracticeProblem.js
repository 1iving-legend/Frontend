
//Sequence Practice Problems


//Use REPL – Random Function Math.floor(Math.random() * 10); to get Single digit
let value1=Math.floor(Math.random() * 10);
console.log(value1);


//Use REPL – Use Random to get Dice Number between 1 to 6
let value2= Math.floor(Math.random()*6+1);
console.log(value2);


//Use REPL – Add two Random Dice Number and Print the Result
console.log(10+15);



/*Use Script & Debug – Write a program that reads 5 Random 2 Digit values ,
then find their sum and the average*/

function getRandomTwoDigit() {
    return Math.floor(Math.random() * (99 - 10 + 1)) + 10;
}

let num1 = getRandomTwoDigit();
let num2 = getRandomTwoDigit();
let num3 = getRandomTwoDigit();
let num4 = getRandomTwoDigit();
let num5 = getRandomTwoDigit();


let sum = num1 + num2 + num3 + num4 + num5;

let average = sum / 5;

console.log("Random Numbers:", num1, num2, num3, num4, num5);
console.log("Sum:", sum);
console.log("Average:", average.toFixed(2));



// (a) Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log(`${inches} inches = ${feet.toFixed(2)} feet`);

// (b) Convert Rectangular Plot dimensions (60 ft × 40 ft) to meters
let lengthFeet = 60;
let widthFeet = 40;
let feetToMeters = 0.3048; 

let lengthMeters = lengthFeet * feetToMeters;
let widthMeters = widthFeet * feetToMeters;
console.log(`Plot Dimensions: ${lengthMeters.toFixed(2)}m × ${widthMeters.toFixed(2)}m`);

// (c) Calculate the area of 25 such plots in acres
let singlePlotAreaFeet = lengthFeet * widthFeet;
let totalAreaFeet = singlePlotAreaFeet * 25; 
let feetToAcre = 43560;

let areaInAcres = totalAreaFeet / feetToAcre;
console.log(`Total area of 25 plots = ${areaInAcres.toFixed(4)} acres`);

