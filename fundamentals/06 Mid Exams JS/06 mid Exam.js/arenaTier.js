function gladiators(input) {
    let gladiators = {};
    let command = input.shift();

    while (command !== 'Ave Cesar') {
        if (command.includes('->')) {
            let [gladiatorName, technique, skillPoints] = command.split(' -> ');
            if (gladiators.hasOwnProperty(gladiatorName)) {
                if (gladiators[gladiatorName].hasOwnProperty(technique)) {
                    let currentValue = Number(gladiators[gladiatorName][technique]);
                    if (currentValue < skillPoints) {
                        gladiators[gladiatorName][technique] = skillPoints;
                    }
                } else {
                    let newTechnique = technique;
                    gladiators[gladiatorName][newTechnique] = skillPoints;
                }
            } else {
                gladiators[gladiatorName] = {
                    [technique]: skillPoints,
                }
            }
        } else {
            let [firstGladiator, vs, secondGladiator] = command.split(' ');
            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                let firstGladiatorSkills = Object.keys(gladiators[firstGladiator]);
                let secondGladiatorSkills = Object.keys(gladiators[secondGladiator]);
                for (let abilityOne of firstGladiatorSkills) {
                    for (let abilityTwo of secondGladiatorSkills) {
                        if (abilityOne === abilityTwo) {
                            let totalFirst = 0;
                            let totalSecond = 0;
                            for (let abilitiesPower of Object.values(gladiators[firstGladiator])) {
                                totalFirst += Number(abilitiesPower);
                            }
                            for (let abilitiesPower of Object.values(gladiators[secondGladiator])) {
                                totalSecond += Number(abilitiesPower);
                            }
                            if (totalFirst > totalSecond) {
                                delete gladiators[secondGladiator];
                            } else if (totalFirst < totalSecond) {
                                delete gladiators[firstGladiator];
                            }
                        }
                    }
                }
            }

        }
        command = input.shift();
    }

    let result = {};
    for (let keys of Object.keys(gladiators)) {
        let sum = 0;
        for (let values of Object.values(gladiators[keys])) {
            sum += Number(values);
        }
        result[keys] = sum;
    }

    let sortedByNumber = Object.entries(result).sort((c, d) => d[0].localeCompare(c[0])).sort((a, b) => b[1] - a[1]);
    for (let gladiator of sortedByNumber) {
        console.log(`${gladiator[0]}: ${gladiator[1]} skill`);
        let skills = Object.entries(gladiators[gladiator[0]]).sort((c, d) => c[0].localeCompare(d[0])).sort((a, b) => b[1] - a[1]);
        skills.forEach(arr => {
            console.log(`- ${arr[0]} <!> ${arr[1]}`);
        })
    }
}
gladiators([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]
);

