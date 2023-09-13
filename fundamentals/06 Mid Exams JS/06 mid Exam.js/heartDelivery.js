function heartDelivery(inputArray) {
    let neighbourhoodMap = inputArray[0].split('@').map(Number);
    let index = 1;
    let command;
    let startPosition = 0;
    
    while ((command = inputArray[index]) !== "Love!") {
        let commandArray = command.split(' ');
        let lengthOfJump = Number(commandArray[1]);
        let nextPosition = startPosition + lengthOfJump;

        if (nextPosition > neighbourhoodMap.length-1) {
            nextPosition = 0;
        }

        if (neighbourhoodMap[nextPosition] === 0) {
            console.log(`Place ${nextPosition} already had Valentine's day.`);
            startPosition = nextPosition;
        } else {
            neighbourhoodMap[nextPosition] -= 2;
            if (neighbourhoodMap[nextPosition] === 0) {
                console.log(`Place ${nextPosition} has Valentine's day.`);
            }
            startPosition = nextPosition;
        }

        index++;
    }

    let didntCelebrate = 0;
    for (const el of neighbourhoodMap) {
        if (el > 0) {
            didntCelebrate++;
        }
    }

    console.log(`Cupid's last position was ${startPosition}.`);
    if (didntCelebrate > 0) {
        console.log(`Cupid has failed ${didntCelebrate} places.`);
    } else {
        console.log("Mission was successful.")
    }
}
// heartDelivery([
//     "10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"
// ]);
heartDelivery([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]);