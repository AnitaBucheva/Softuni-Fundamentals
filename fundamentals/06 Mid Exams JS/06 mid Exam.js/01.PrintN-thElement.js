function printElementsWithStep(input) {
    let step = Number(input[input.length - 1]);
    let result = "";
    for (let i = 0; i < input.length - 1; i += step) {
        result += input[i] + " ";
    }
    console.log(result)
}
printElementsWithStep(['5', '20', '31', '4', '20', '2']);
printElementsWithStep(['dsa', 'asd', 'test', 'test', '2']);
printElementsWithStep(['1', '2', '3', '4', '5', '6']);