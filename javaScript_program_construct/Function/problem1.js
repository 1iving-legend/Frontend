

const prompt = require("prompt-sync")(); 

function convertTemperature() {
    console.log("Choose Conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
    let choice = parseInt(prompt("Enter choice (1 or 2): "));

    switch (choice) {
        case 1:
            let degC = parseFloat(prompt("Enter Celsius (0°C to 100°C): "));
            if (degC < 0 || degC > 100) {
                console.log("Invalid Input! Enter a value between 0 and 100°C.");
            } else {
                let degF = (degC * 9 / 5) + 32;
                console.log(`${degC}°C = ${degF.toFixed(2)}°F`);
            }
            break;

        case 2:
            let degF = parseFloat(prompt("Enter Fahrenheit (32°F to 212°F): "));
            if (degF < 32 || degF > 212) {
                console.log("Invalid Input! Enter a value between 32 and 212°F.");
            } else {
                let degC = (degF - 32) * 5 / 9;
                console.log(`${degF}°F = ${degC.toFixed(2)}°C`);
            }
            break;

        default:
            console.log("Invalid choice! Please select 1 or 2.");
    }
}

convertTemperature();