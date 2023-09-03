function solve(input) {
    let dayCounter = 0;
    let totalBitcoins = 0;
    let dayOfFirstPurchase = 0;
    let totalMoney = 0;

    for (let index = 0; index < input.length; index++) {
        let dailyDig = Number(input[index]);
        dayCounter++;
        if (dayCounter === 3) {
            dailyDig -= dailyDig * 0.3;
            dayCounter = 0;
        } 
        let dailyMoney = dailyDig * 67.51;
        totalMoney += dailyMoney;
        if (totalMoney >= 11949.16) {
            let currentBitcoins = 0;
            currentBitcoins+=Math.floor(totalMoney / 11949.16);
            totalBitcoins+=currentBitcoins
            totalMoney -= 11949.16*currentBitcoins;
            if (totalBitcoins !== 0 && dayOfFirstPurchase === 0) {
                dayOfFirstPurchase = index + 1;
            }
        }
    }
    console.log(`Bought bitcoins: ${ totalBitcoins }`);
    if (dayOfFirstPurchase !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstPurchase}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
solve([100, 200, 300])