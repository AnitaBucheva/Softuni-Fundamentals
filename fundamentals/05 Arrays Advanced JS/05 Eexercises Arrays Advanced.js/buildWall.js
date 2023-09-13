function buildWall(inputArray) {
    let totalConcrete = 0;
    inputArray.sort((a, b) => a - b);
    let daysToWork = 30 - Number(inputArray[0]);
    let result = new Array(daysToWork).fill(0);
    
    for (let i = 0; i < inputArray.length; i++) {
        let counter = 0;
        let currentSite = Number(inputArray[i]);
        while (currentSite < 30) {
            currentSite++;
            result[counter] += 195;
            totalConcrete += 195;
            counter++;
        }
    }
    console.log(result.join(', '));
    console.log(totalConcrete * 1900+' pesos');
}
//buildWall([21, 25, 28]);
//buildWall([17]);
buildWall([17, 22, 17, 19, 17]);