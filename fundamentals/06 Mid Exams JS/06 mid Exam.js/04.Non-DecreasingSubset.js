function nonDecreasingSubsed(input) {
    let result = [];
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let index = 0; index < input.length; index++) {
        if (index === 0) {
            maxNum = Number(input[index]);
            result.push(maxNum);
        } else {
            let currentNum = Number(input[index]);
            if (currentNum >= maxNum) {
                result.push(currentNum);
                maxNum = currentNum;
            }
        }
    }
    console.log(result.join(' '));
}
nonDecreasingSubsed([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsed([ 1, 2, 3, 4]);
nonDecreasingSubsed([ 20, 3, 2, 15, 6, 1]);