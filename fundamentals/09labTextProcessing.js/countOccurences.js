function countOccurences(text, key) {
    let textToWords = text.split(' ');
    let counter = 0;
    for (let word of textToWords) {
        if (word === key) {
            counter++;
        }
    }
    console.log(counter);
}
countOccurences('This is a word and it also is a sentence',
    'is'
)