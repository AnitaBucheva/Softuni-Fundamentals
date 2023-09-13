function carWash(arrayOfCommands) {
    let cleanPercentage = 0;
    
    for (let i = 0; i < arrayOfCommands.length; i++) {
        let currentAction = arrayOfCommands[i];
        switch (currentAction) {
            case 'soap': cleanPercentage += 10; break;
            case 'water': cleanPercentage += cleanPercentage * 0.2; break;
            case 'vacuum cleaner': cleanPercentage += cleanPercentage * 0.25; break;
            case 'mud': cleanPercentage -= cleanPercentage * 0.1;
        }
    }

    console.log(`The car is ${cleanPercentage.toFixed(2)}% clean.`)
}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap','water'])