function receptionWork(inputArray) {
    let firstEmployeeSpeed = Number(inputArray[0]);
    let secondEmployeeSpeed = Number(inputArray[1]);
    let thirdEmployeeSpeed = Number(inputArray[2]);
    let totalSpeed = firstEmployeeSpeed + secondEmployeeSpeed + thirdEmployeeSpeed;
    let totalStudents = Number(inputArray[3]);
    let hours = 0;

    while (totalStudents > 0) {
        hours++;
        if (hours % 4 === 0) {
            hours++;
        }
        totalStudents -= totalSpeed;
    }

    console.log(`Time needed: ${hours}h.`);

}
receptionWork(["5", "6", "4", "20"]);
receptionWork(["1", "2", "3", "45"]);
receptionWork(["3", "2", "5", "40"]);