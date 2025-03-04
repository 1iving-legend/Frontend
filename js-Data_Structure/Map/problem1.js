//
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
}

let data = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);

let maxCount = 10;
let maxReached = false;
let maxReachedValue = null;

while (!maxReached) {
    let temp = rollDice();
    data.set(temp, data.get(temp) + 1);

    
    if (data.get(temp) === maxCount) {
        maxReached = true;
        maxReachedValue = temp;
    }
}

let minValue = [...data.entries()].reduce((min, curr) => (curr[1] < min[1] ? curr : min));

console.log("Final Dice Rolls Count:", data.entries());
console.log(`Number that reached maximum times: ${maxReachedValue} (${maxCount} times)`);
console.log(`Number that appeared minimum times: ${minValue[0]} (${minValue[1]} times)`);
