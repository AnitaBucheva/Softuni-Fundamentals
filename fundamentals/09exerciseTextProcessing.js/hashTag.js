function hashTag(input) {
    let inputArr = input.split(' ');
    for (let word of inputArr) {
        if (word[0] === '#' && word.length > 1) {
            let wordArr = word.split('');
            wordArr.shift();
            let wordToPrint = '';
            for (let char of wordArr) {
                if (!isNaN(char)) {
                    wordToPrint = '';
                    break;
                } else {
                    wordToPrint += char;
                }
            }
            if (wordToPrint.length > 0) {
                console.log(wordToPrint);
            }
        }
    }
}
hashTag('The symbol # is known #variously in English-speaking #reg1ions as the #number sign')