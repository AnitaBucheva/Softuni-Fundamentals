function demo([peopleWaiting, currentLiftState]) {
   
        let liftCapacity = 4;
        let wagonsArr = currentLiftState.split(" ").map(Number);
        let peopleInQueue = Number(peopleWaiting);
      
        for (let i = 0; i < wagonsArr.length; i++) {
            let curWagon = wagonsArr[i];
          let availableSpace = liftCapacity - curWagon
      
          if (availableSpace > 0 && peopleInQueue > 0) {
            let peopleToAdd = Math.min(availableSpace, peopleInQueue);
            curWagon += peopleToAdd;
            peopleInQueue -= peopleToAdd;
          }
        }
      
        if (peopleInQueue === 0 && wagonsArr.every(wagon => wagon === liftCapacity)) {
          console.log(wagonsArr.join(' '));
        } else if (peopleInQueue === 0) {
          console.log("The lift has empty spots!\n" + wagonsArr.join(' '));
        } else {
          console.log(`There isn't enough space! ${peopleInQueue} people in a queue!\n` + wagonsArr.join(' '));
        }
      }
demo([
    "15",
    "0 0 0 0 0"]);