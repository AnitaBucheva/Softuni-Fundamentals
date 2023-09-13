function solve(num1, operator, num2) {
    if (operator === "+") {
        console.log(`${(num1+num2).toFixed(2)}`);
    } else if (operator === "-") {
        console.log(`${(num1-num2).toFixed(2)}`);
    } else if (operator === "*") {
        console.log(`${(num1*num2).toFixed(2)}`);    
    } else {
        console.log(`${(num1/num2).toFixed(2)}`);
    }
}
solve(5,
    '+',
    10
    )