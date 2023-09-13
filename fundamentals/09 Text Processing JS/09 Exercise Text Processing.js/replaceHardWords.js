function replaceHardWords(input) {
    let textArr = input[0].split(' ');
    let words = input[1];

    for (let el of textArr) {
        if (el.includes('_')) {
            let length = el.length;
            if (el.includes('.') || el.includes(',')) {
                length--;
            }
            let replacement = '';
            for (const word of words) {
                if (word.length === length) {
                    replacement = words.splice(words.indexOf(word), 1).join('');
                    break;
                }
            }
            if (el.includes('.')) {
                replacement += '.';
            } else if (el.includes(',')) {
                replacement += ',';
            }
            
            textArr.splice(textArr.indexOf(el), 1, replacement);
        }
    }
    console.log(textArr.join(' '));
}
replaceHardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)