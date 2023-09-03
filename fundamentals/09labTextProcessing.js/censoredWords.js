function censoredWords(sentence, word) {
    let censored = sentence.replace(word, '*'.repeat(word.length));
    
    while (censored.includes(word)) {
        censored = censored.replace(word, '*'.repeat(word.length));
    }
    
    console.log(censored);
}
censoredWords('Find the hidden word in the hidden village in the hidden town', 'hidden')