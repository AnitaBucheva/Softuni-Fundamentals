function reverseOrder(inputArray) {
    if (inputArray.length % 2 === 0 && inputArray.length <= 2) {
        console.log('Error: not enough operands!');
        return;
    } else if (inputArray.length % 2 === 0) {
        console.log('Error: too many operands!');
        return;
    }

    let resultArray = [];
    
    while (inputArray.length > 0) {
        if (Number.isInteger(inputArray[0])) {
            let currentNum = inputArray.shift();
            resultArray.push(currentNum);
        } else {
            let operator = inputArray.shift();
            if (resultArray.length < 2) {
                console.log("Error: not enough operands!");
                return;
            } else {
                switch (operator) {
                    case '+':
                        sum(resultArray);
                        break;
                    case '-':
                        subtract(resultArray);
                        break;
                    case '*':
                        multiply(resultArray);
                        break;
                    case '/':
                        divide(resultArray);
                        break;
                }
            }
            
        }
    }

    function sum(result) {
        if (result.length >= 2) {
            let newNumber = result[result.length - 2] + result[result.length - 1];
            result.splice(result.length - 2, 2, newNumber);
        } 
    }

    function subtract(result) {
        if (result.length >= 2) {
            let newNumber = result[result.length - 2] - result[result.length - 1];
            result.splice(result.length - 2, 2, newNumber);
        } 
    }

    function multiply(result) {
        if (result.length >= 2) {
            let newNumber = result[result.length - 1] * result[result.length - 2];
            result.splice(result.length - 2, 2, newNumber);
        } 
    }

    function divide(result) {
        if (result.length >= 2) {
            let newNumber = result[result.length - 2] / result[result.length - 1];
            result.splice(result.length - 2, 2, newNumber);
        } 
    }

    if (resultArray.length > 1) {
        console.log(`Error: too many operands!`);
    } else {
        console.log(resultArray.join(' '));
    }
    
}