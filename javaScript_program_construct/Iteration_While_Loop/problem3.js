

let headsCount=0;
let tailsCount=0;


while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.floor(Math.random() * 2); // 0 for Heads, 1 for Tails

    if (flip === 0) {
        headsCount++;
        console.log("Heads");
    } else {
        tailsCount++;
        console.log("Tails");
    }
}

console.log(`Game Over! Heads: ${headsCount}, Tails: ${tailsCount}`);
console.log(`${headsCount === 11 ? "Heads" : "Tails"} won!`);

