function lastNumberSequence(length, previousNumbersCount) {
    let resultArray = [];
    if (length > 0) {
        resultArray = [1];
        while (resultArray.length < length) {
            let sum = 0;
            if (resultArray.length <= previousNumbersCount) {
                for (let index = resultArray.length - 1; index >= 0; index--) {
                    sum += resultArray[index];
                }
                resultArray.push(sum);
            } else {
                for (let index = resultArray.length - 1; index > ((resultArray.length - 1) - previousNumbersCount); index--) {
                    sum += resultArray[index];
                }
                resultArray.push(sum);
            }
        }
    }
    
    console.log(resultArray.join(' '));
}
lastNumberSequence(8,2)