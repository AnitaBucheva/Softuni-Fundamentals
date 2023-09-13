function solve(num) {
    let numToString = num.toString();
    let sum = 0;
    let isAmazing = false;
    for (let i = 0; i < numToString.length; i++) {
        let currentDigit = Number(numToString[i]);
        sum += currentDigit;
    }
    let sumToString = sum.toString();
    for (let j = 0; j < sumToString.length; j++) {
        let digit = Number(sumToString[j]);
        if (digit === 9) {
            isAmazing = true;
        }
    }
    if (isAmazing) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}
solve(999)