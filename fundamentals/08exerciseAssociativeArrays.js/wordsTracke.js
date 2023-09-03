function wordsTracke(wordArray) {
    const words = wordArray.shift().split(' ');
    let resultArray = {};
for (const word of words) {
    resultArray[word] = 0; 
}
for (const word of wordArray) {
    if(resultArray.hasOwnProperty(word)){
        resultArray[word]++;
    }
}
const sorted = Object.entries(resultArray).sort((a, b)=> b[1] - a[1]);
for (const kvp of sorted) {
  
    console.log(`${kvp[0]} - ${kvp[1]}`);
}
}
wordsTracke([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);