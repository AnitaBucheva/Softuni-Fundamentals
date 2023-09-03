function oddOccurrences(word) {
    let resultObject = {};
    let allWords = word.split(' ').map(w => w.toLowerCase());
    let allWordsLength = allWords.length;

    for(let i = 0; i < allWordsLength; i++){
        if(!resultObject.hasOwnProperty(allWords[i])){
            resultObject[allWords[i]] = [];
        }
        resultObject[allWords[i]].push(i);
    }
    let sorted = Object.entries(resultObject).sort((a,b) => a[1][0] - b[1][0]);
    let result = "";
    for (const el of sorted) {
        if(el[1].length % 2 !== 0){
            result += `${el[0]} `;
        }
    }
    console.log(result);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');