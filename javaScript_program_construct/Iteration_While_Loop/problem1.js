// Get n from user input

let n = 10;

let power = 1;
while (power <= n && Math.pow(2, power) <= 256) {
    console.log(`2^${power} = ${Math.pow(2, power)}`);
    power++;
}