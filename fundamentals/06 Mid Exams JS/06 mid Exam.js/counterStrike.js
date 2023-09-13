function counterStrike(inputArray) {
    let totalEnergy = Number(inputArray[0]);
    let victories = 0;
    let index = 1;
    let command;
    let isGameOver = false;
  
    while ((command = inputArray[index]) !== "End of battle") {
      let currentDistance = Number(command);
  
      if (totalEnergy - currentDistance < 0) {
        isGameOver = true;
        break;
      } else {
        totalEnergy -= currentDistance;
        victories++;
        if (victories % 3 === 0) {
          totalEnergy += victories;
        }
      }
  
      index++;
    }
    if (isGameOver) {
      console.log(
        `Not enough energy! Game ends with ${victories} won battles and ${totalEnergy} energy`
      );
    } else {
      console.log(`Won battles: ${victories}. Energy left: ${totalEnergy}`);
    }
  }
  counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
  counterStrike(["200", "54", "14", "28", "13", "End of battle"]);