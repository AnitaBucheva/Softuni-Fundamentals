function printDNA(num) {
    let sequence = ["A", "T", "C", "G", "T", "T", "A", "G", "G", "G"];
    let result = [];
    let oddCounter = 0;
    for (let row = 1; row <= num; row++) {
        let firstLetter = sequence.shift();
        let secondLetter = sequence.shift();
        let firstRow = `**${firstLetter}${secondLetter}**`;
        let secondRow = `*${firstLetter}--${secondLetter}*`;
        let thirdRow = `${firstLetter}----${secondLetter}`;
        if ((row % 2 !== 0) && (oddCounter === 0)) {
            oddCounter++;
            console.log(firstRow);
        } else if ((row % 2 !== 0) && (oddCounter !== 0)) {
            oddCounter = 0;
            console.log(thirdRow);
        } else {
            console.log(secondRow);
        }

        sequence.push(firstLetter);
        sequence.push(secondLetter);
    }
}
printDNA(10);