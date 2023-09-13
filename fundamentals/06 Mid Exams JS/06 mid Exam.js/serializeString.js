function serializeString(input) {
    let wordArr = input[0].split('');
    let result = {};
    for (let index = 0; index < wordArr.length; index++){
        let currentLetter = wordArr[index];
        let currentOccurence = '';
        for (let i = 0; i < wordArr.length; i++){
            if (wordArr[i] === currentLetter) {
                currentOccurence += `${i}/`
            }
        }
        
        result[currentLetter] = currentOccurence.slice(0,currentOccurence.length - 1);
    }
    for (const [key, value] of Object.entries(result)) {
        console.log(`${key}:${value}`);
    }
}
serializeString(["avjavamsdmcalsdm"])