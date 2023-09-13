function solve(n) {
    for (let i = 1; i <= n; i++) {
        let numberToString = i.toString();
        let sumDigits = 0;
        for (let j = 0; j < numberToString.length; j++) {
            let currentDigit = Number(numberToString[j]);
            sumDigits += currentDigit;
        }
        if (sumDigits === 5 || sumDigits === 7 || sumDigits === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        } 
    }
}
solve(15)