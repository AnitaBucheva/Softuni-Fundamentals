function stringSubstring(word, text) {
    const tokens = text.split(' ');

    for (const token of tokens) {
        if (token.toLocaleLowerCase() === word.toLocaleLowerCase()) {
            return console.log(word);
        }
    }

    console.log(`${word} not found!`);
}
stringSubstring('pythOn',
    'pythOn is the best programming language'
)