function lettersAndNumbers(input) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    let arr = input.split(' ');
    while (arr.includes('')) {
        let index = arr.indexOf('');
        arr.splice(index, 1);
    }
    let sum = 0;
    for (let str of arr) {
        let strArr = str.split('');
        let firstLetter = strArr.shift();
        let lastLetter = strArr.pop();
        let number = Number(strArr.reduce((a, b) => a + b));
        if (firstLetter.charCodeAt() >= 65 && firstLetter.charCodeAt() <= 90) {   
            let letterPosition = alphabet.indexOf(firstLetter.toLowerCase()) + 1;
            number = number / letterPosition;
            if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) { 
                letterPosition = alphabet.indexOf(lastLetter.toLowerCase()) + 1;
                number -= letterPosition;
            } else {                                                               
                letterPosition = alphabet.indexOf(lastLetter.toLowerCase()) + 1;
                number += letterPosition;
            }
        } else {                                                                    
            let letterPosition = alphabet.indexOf(firstLetter.toLowerCase()) + 1;
            number = number * letterPosition;
            if (lastLetter.charCodeAt() >= 65 && lastLetter.charCodeAt() <= 90) {   
                letterPosition = alphabet.indexOf(lastLetter.toLowerCase()) + 1;
                number -= letterPosition;
            } else {                                                                
                letterPosition = alphabet.indexOf(lastLetter.toLowerCase()) + 1;
                number += letterPosition;
            }
        }
        sum += number;
    }

    console.log(sum.toFixed(2));
}
lettersAndNumbers('a1A')