function treasureHunt(inputArray) {
    let chestLoot = inputArray[0].split('|');
    let index = 1;
    let command;

    while ((command = inputArray[index]) !== "Yohoho!") {
        let commandArray = command.split(' ');
        let action = commandArray[0];

        switch (action) {
            case 'Loot':
                loot(commandArray);
                break;
            case 'Drop':
                drop(commandArray);
                break;
            case 'Steal':
                steal(commandArray);
                break;
        }

        function loot(commandArray) {
            for (let i = 1; i < commandArray.length; i++) {
                let currentItem = commandArray[i];
                if (!chestLoot.includes(currentItem)) {
                    chestLoot.unshift(currentItem);
                }
            }
        }

        function drop(commandArray) {
            let index = Number(commandArray[1]);
            if (index >= 0 && index < chestLoot.length) {
                let removedItem = chestLoot.splice(index, 1).join(' ');
                chestLoot.push(removedItem);
            }
        }

        function steal(commandArray) {
            let stolenItemsCount = Number(commandArray[1]);
            if (stolenItemsCount > chestLoot.length - 1) {
                console.log(chestLoot.join(', '));
                chestLoot.splice(0);
            } else {
                let stolenItems = chestLoot.splice(chestLoot.length - stolenItemsCount, stolenItemsCount);
                console.log(stolenItems.join(', '));
            }
        }
        index++;
    }
    let sum = 0;
    for (const el of chestLoot) {
        sum += el.length;
    }
    let averageGain = (sum / chestLoot.length).toFixed(2);
    if (chestLoot.length > 0) {
console.log(`Average treasure gain: ${averageGain} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
    
}
// treasureHunt([
//   "Gold|Silver|Bronze|Medallion|Cup",
//   "Loot Wood Gold Coins",
//   "Loot Silver Pistol",
//   "Drop 3",
//   "Steal 3",
//   "Yohoho!",
// ]);
treasureHunt([
  "Diamonds|Silver|Shotgun|Gold",
  "Loot Silver Medals Coal",
  "Drop -1",
  "Drop 1",
  "Steal 6",
  "Yohoho!",
]);