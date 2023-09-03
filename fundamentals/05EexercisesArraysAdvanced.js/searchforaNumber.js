function searchforaNumber(nums, actions) {
    let numToTake = actions[0];
    let numToDell = actions[1];
    let specialNum = actions[2];
    let takenNum = nums.slice(0, numToTake);
    takenNum.splice(0, numToDell);
    let counter = 0;

    for (const number of takenNum) {
        if(number === specialNum){
            counter++;
        }
    }
    console.log(`Number ${specialNum} occurs ${counter} times.`);
}
searchforaNumber([5, 2, 3, 4, 1, 6],

    [5, 2, 3])