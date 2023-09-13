function sortNumber(inputString) {
    let numbersArray = inputString.split(" ").map(Number);
    let sum = 0;
    for (const el of numbersArray) {
        sum += el;
    }
    let average = sum / numbersArray.length;
    let greaterNumbers = [];
    for (const el of numbersArray) {
        if (el > average) {
            greaterNumbers.push(el);
        }
    }
    greaterNumbers.sort((a, b) => b - a);
    if (greaterNumbers.length === 0) {
        console.log("No");
    } else {
        result = greaterNumbers.splice(0, 5);
        console.log(result.join(' '));
    }
    
}
sortNumber("10 20 30 40 50");
sortNumber("5 2 3 4 -10 30 40 50 20 50 60 60 51");
sortNumber("1");
sortNumber("-1 -2 -3 -4 -5 -6");