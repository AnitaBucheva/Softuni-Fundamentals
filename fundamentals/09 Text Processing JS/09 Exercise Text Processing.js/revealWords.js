function revealWords(word, text) {
    let wordArr = word.split(', ');
    let textArr = text.split(' ');
    for (let word of wordArr) {
        for (let wordd of textArr) {
            if (wordd === '*'.repeat(word.length)) {
                let index = textArr.indexOf(wordd);
                textArr.splice(index, 1, word);
            }
        }
    }
    console.log(textArr.join(' '));
}
revealWords('great',
    'softuni is ***** place for learning new programming languages'
)