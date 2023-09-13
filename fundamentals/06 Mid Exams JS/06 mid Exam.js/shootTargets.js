function shootTargets(inputArray) {
    let targetsArray = inputArray[0].split(" ").map(Number);
    let index = 1;
    let command;
    let shotTargetCounter = 0;
  
    while ((command = inputArray[index]) !== "End") {
      let currentTargetIndex = Number(command);
      if ((currentTargetIndex >= 0) && (currentTargetIndex < targetsArray.length) && (targetsArray[currentTargetIndex] !== -1)) {
        shotTargetCounter++;
        let damage = targetsArray[currentTargetIndex];
        for (let i = 0; i < targetsArray.length; i++) {
          let targetValue = targetsArray[i];
          if (targetValue !== -1) {
            if (damage < targetValue) {
              targetsArray[i] = targetValue - damage;
            } else {
              targetsArray[i] = targetValue + damage;
            }
          }
        }
        targetsArray[currentTargetIndex] = -1;
      }
      index++;
      }
      console.log(`Shot targets: ${shotTargetCounter} -> ${targetsArray.join(' ')}`);
  }
  shootTargets(["24 50 36 70", "0", "4", "3", "1", "End"]);
  shootTargets(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);