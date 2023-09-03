function firstAndLastNumbers(inputArray) {
    let num = inputArray.shift();
    console.log(inputArray.slice(0, num).join(' '));
    console.log(inputArray.slice(-num).join(' '));
}
firstAndLastNumbers([2, 7, 8, 9]);