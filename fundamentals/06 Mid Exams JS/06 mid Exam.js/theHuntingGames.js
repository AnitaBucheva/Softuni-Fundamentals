function theHuntingGames(array) {
    let arr = array.slice(0).map(Number);
    let days = arr.shift();
    let players = arr.shift();
    let groupEnergy = arr.shift();
    let totalWater = arr.shift() * days * players;
    let totalFood = arr.shift() * days * players;
 
    for (let i = 0; i < arr.length; i++) {
        let day = i + 1;
        let energy = arr[i];
 
        if (energy < groupEnergy) {
            groupEnergy -= energy;
            if (day % 2 === 0) {
                groupEnergy = groupEnergy * 1.05;
                totalWater = totalWater * 0.7;
            }
            if (day % 3 === 0) {
                groupEnergy = groupEnergy * 1.1;
                totalFood = totalFood - totalFood / players;
            }
        } else {
            return `You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`
        }
    }
    return `You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`
}