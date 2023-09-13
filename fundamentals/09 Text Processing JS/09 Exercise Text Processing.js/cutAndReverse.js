function cutAndReverse(word) {
    let length = word.length;
    let wordArr = word.split('');
    let firstWord = wordArr.splice(0, length / 2).reverse().join('');
    console.log(firstWord);
    console.log(wordArr.reverse().join(''));
    
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')