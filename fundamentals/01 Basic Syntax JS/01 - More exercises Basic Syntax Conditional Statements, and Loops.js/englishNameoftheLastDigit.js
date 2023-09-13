function solve(num) {
    let numToString = num.toString();
    let index = numToString.length - 1;
    let lastNum = Number(numToString[index]);
    let lastDigit = "";
    switch (lastNum) {
        case 1: lastDigit = "one"; break;
        case 2: lastDigit = "two"; break;
        case 3: lastDigit = "three"; break;
        case 4: lastDigit = "four"; break;
        case 5: lastDigit = "five"; break;
        case 6: lastDigit = "six"; break;
        case 7: lastDigit = "seven"; break;
        case 8: lastDigit = "eight"; break;
        case 9: lastDigit = "nine"; break;
        case 0: lastDigit = "zero"; break;
    }
    console.log(`${lastDigit}`);
}
solve(1643)