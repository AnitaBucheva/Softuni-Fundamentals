function plunderingPirates(inputArray) {
    let daysCount = Number(inputArray[0]);
    let plunderPerDay = Number(inputArray[1]);
    let expectedPlunder = Number(inputArray[2]);

    let totalPlunder = 0;

    for (let day = 1; day <= daysCount; day++) {
        totalPlunder += plunderPerDay;
        if (day % 3 === 0) {
            totalPlunder += plunderPerDay * 0.5;
        }
        if (day % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        percentageLeft = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
    }
}
plunderingPirates(["5", "40", "100"]);
plunderingPirates(["10", "20", "380"]);