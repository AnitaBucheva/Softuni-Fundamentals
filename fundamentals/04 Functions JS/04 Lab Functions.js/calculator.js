function calculator(numOne, numTwo, operator) {
    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (numOne, numTwo) => numOne - numTwo;
    let multiply = (numOne, numTwo) => numOne * numTwo;
    let divide = (numOne, numTwo) => numOne / numTwo;

    switch (operator) {
        case 'add': return add(numOne, numTwo);
        case 'subtract': return subtract(numOne, numTwo);
        case 'multiply': return multiply(numOne, numTwo);
        case 'divide': return divide(numOne, numTwo);
    }
}
console.log(calculator(50,
    13,
    'subtract'));