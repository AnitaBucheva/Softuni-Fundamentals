function liftProblem(inputArray) {
    let peopleWaiting = Number(inputArray.shift());
    let wagonsArr = inputArray[0].split(' ').map(x => Number(x));
    let takenSeats = 0;
    for (const el of wagonsArr) {
        takenSeats += el;
    }
    
    let freeSeats = wagonsArr.length * 4 - takenSeats;
    
    if (freeSeats < peopleWaiting) {
        console.log(`There isn't enough space! ${peopleWaiting-freeSeats} people in a queue!`);
        for (let i = 0; i < wagonsArr.length; i++) {
            wagonsArr[i] = 4;
        }
        console.log(wagonsArr.join(' '));
    } else if (freeSeats === peopleWaiting) {
        for (let i = 0; i < wagonsArr.length; i++) {
          wagonsArr[i] = 4;
        }
        console.log(wagonsArr.join(" "));
    } else {
        console.log("The lift has empty spots!");
        for (let i = 0; i < wagonsArr.length; i++) {
            let currentWagon = wagonsArr[i];
            while (currentWagon < 4 && peopleWaiting > 0) {
                currentWagon++;
                peopleWaiting--;
            }
            wagonsArr[i] = currentWagon;
        }
        console.log(wagonsArr.join(" "));
    }
}
liftProblem(["15","0 0 0 0"]);
liftProblem(["20", "0 2 0"]);