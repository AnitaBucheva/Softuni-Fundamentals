function solve(lostFightsCount, helmetPrice, swordPrice, shieldPrice, arrmorPrice) {
    let brokenHelmetCount = 0;
    let brokenSwordCount = 0;
    let brokenShieldCount = 0;
    let brokenArrrmorCount = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            brokenHelmetCount++;
            brokenSwordCount++;
            brokenShieldCount++;
            if (brokenShieldCount % 2 === 0) {
                brokenArrrmorCount++;
            }
        } else if (i % 2 === 0) {
            brokenHelmetCount++;
        } else if (i % 3 === 0) {
            brokenSwordCount++;
        }
    }
    let expenses = brokenHelmetCount * helmetPrice + brokenSwordCount * swordPrice + brokenShieldCount * shieldPrice + brokenArrrmorCount * arrmorPrice;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)

}
solve(23,
12.50,
21.50,
40,
200)