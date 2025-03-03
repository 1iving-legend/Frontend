const prompt = require("prompt-sync")(); 

let low = 1, high = 100;
console.log("Think of a number between 1 and 100");

while (low < high) {
    let mid = Math.floor((low + high) / 2);
    let response = prompt(`Is your number greater than ${mid}? (yes/no): `).toLowerCase();

    if (response === "yes") {
        low = mid + 1;
    } else {
        high = mid;
    }
}

console.log(`Your magic number is: ${low}`);