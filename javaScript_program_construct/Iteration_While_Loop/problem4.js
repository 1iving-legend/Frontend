let money = 100, bets = 0, wins = 0;

while (money > 0 && money < 200) {
    let betResult = Math.floor(Math.random() * 2); // 0 = Lose, 1 = Win
    bets++;

    if (betResult === 1) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log(`Game Over! Money: Rs ${money}`);
console.log(`Total Bets: ${bets}`);
console.log(`Total Wins: ${wins}`);