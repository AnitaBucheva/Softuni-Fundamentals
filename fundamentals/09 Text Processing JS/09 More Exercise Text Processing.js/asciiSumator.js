function asciiSumator(input) {
    let start = input[0].charCodeAt();
    let end = input[1].charCodeAt();
    let wordArr = input[2].split('');
    let sum = 0;
    wordArr.forEach(symbol => {
        let symbolValue = symbol.charCodeAt();
        if (symbolValue > Math.min(start, end) && symbolValue < Math.max(start,end)) {
            sum += symbolValue;
        }
    })

    console.log(sum)
}
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']
)