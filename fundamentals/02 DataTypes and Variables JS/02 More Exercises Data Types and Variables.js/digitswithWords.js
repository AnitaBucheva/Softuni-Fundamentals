function solve(num) {
    let stringAsNum = "";
    switch (num) {
        case "one": stringAsNum = 1; break;
        case "two": stringAsNum = 2; break;
        case "three": stringAsNum = 3; break;
        case "four": stringAsNum = 4; break;
        case "five": stringAsNum = 5; break;
        case "six": stringAsNum = 6; break;
        case "seven": stringAsNum = 7; break;
        case "eight": stringAsNum = 8; break;
        case "nine": stringAsNum = 9; break;
        case "zero": stringAsNum = 0; break;
    }
    console.log(stringAsNum)
}
solve('zero')