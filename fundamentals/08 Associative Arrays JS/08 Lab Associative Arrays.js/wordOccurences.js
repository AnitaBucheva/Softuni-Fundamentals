function wordOccurences(list) {
    let wordCounter = new Map();
    list.forEach(word => {
        if (wordCounter.has(word)) {
            let currentCount = Number(wordCounter.get(word));
            let newCount = currentCount + 1;
            wordCounter.set(word, newCount);
        } else {
            wordCounter.set(word, 1);
        }
    })

    let myArray = Array.from(wordCounter).sort((a, b) => b[1] - a[1]);
    
    for (let [word, count] of myArray) {
        console.log(`${word} -> ${count} times`)
    }
    
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])