function burgerVan(input) {
    let citie = Number(input.shift());
    let profit = 0;
    let total = 0;


    for (let i = 1; i <= citie; i++) {
        let town = input.shift();
        let ear = Number(input.shift());
        let money = Number(input.shift());

        if (i % 3 === 0 && i % 5 === 0) {
            profit = (ear * 0.9) - money;
            total += profit;
            console.log(`In ${town} Burger Bus earned ${profit.toFixed(2)} leva.`);
        } else if (i % 5 === 0) {
            profit = (ear * 0.9) - money;
            total += profit;
            console.log(`In ${town} Burger Bus earned ${profit.toFixed(2)} leva.`);
        } else if (i % 3 === 0) {
            profit = ear - (money * 1.5);
            total += profit;
            console.log(`In ${town} Burger Bus earned ${profit.toFixed(2)} leva.`);
        } else {
            profit = ear - money;
            total += profit;
            console.log(`In ${town} Burger Bus earned ${profit.toFixed(2)} leva.`);
        }

    }
    console.log(`Burger Bus total profit: ${total.toFixed(2)} leva.`);

}
burgerVan((["5",
    "Lille",
    "2226.00",
    "1200.60",
    "Rennes",
    "6320.60",
    "5460.20",
    "Reims",
    "600.20",
    "452.32",
    "Bordeaux",
    "6925.30",
    "2650.40",
    "Montpellier",
    "680.50",
    "290.20"])

);