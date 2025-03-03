const prompt=require("prompt-sync")();
let n = parseInt(prompt());

console.log(`Prime Factors of ${n}:`);

// Divide by 2 until n is odd
while (n % 2 === 0) {
    console.log(2);
    n /= 2;
}

// Check odd factors
for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
        console.log(i);
        n /= i;
    }
}

// If remaining n is a prime number > 2
if (n > 2) console.log(n);