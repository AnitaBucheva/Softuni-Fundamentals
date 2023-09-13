function maxSequence(input) {
    let longestSequence = [];

    for (let i = 0; i < input.length; i++) {
        let currenSequence = [];
        currenSequence.push(input[i]);
        
        for (let j = i + 1; j < input.length; j++) {
            if ((input[i]) === (input[j])) {
                currenSequence.push(input[j]);
            }
            else {
                break;
            }
        }
        if (currenSequence.length > longestSequence.length) {
            longestSequence = currenSequence;
        }
    }
    console.log(longestSequence.join(" "));
}
maxSequence ([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])