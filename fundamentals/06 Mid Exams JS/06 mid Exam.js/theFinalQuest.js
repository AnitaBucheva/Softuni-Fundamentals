function theFinalQuest(input) {
    let text = input.shift().split(' ');
    let command = input.shift().split(' ');
    let wordIndex = 0;
    let firstWord = '';
    let secondWord = '';

    while (command[0] !== 'Stop') {

        switch (command[0]) {

            case 'Delete':
                wordIndex = +command[1] + 1;

                if (wordIndex >= 0 && wordIndex < text.length) {
                    text.splice(wordIndex, 1);
                }
                break;

            case 'Swap':
                firstWord = command[1];
                secondWord = command[2];

                if (text.indexOf(firstWord) !== -1 && text.indexOf(secondWord) !== -1) {
                    let firstWordIndex = text.indexOf(firstWord);
                    let secondWordIndex = text.indexOf(secondWord);
                    let firstSaved = text[firstWordIndex];
                    text[firstWordIndex] = secondWord;
                    text[secondWordIndex] = firstSaved;
                }
                break;

            case 'Put':
                let word = command[1];
                let index = +command[2] - 1;

                if (index >= 0 && index <= text.length) {
                    text.splice(index, 0, word);
                }
                break;

            case 'Replace':
                firstWord = command[1];
                secondWord = command[2];

                let word2Index = text.indexOf(secondWord);

                if (word2Index !== -1) {
                    text[word2Index] = firstWord;
                }
                break;

            case 'Sort':
                text.sort((a, b) => b.localeCompare(a))
                break;

        }

        command = input.shift().split(' ');
    }

    console.log(text.join(' '));
}

theFinalQuest(["This the my quest! final",
    "Put is 2",
    "Swap final quest!",
    "Delete 2",
    "Stop"]);