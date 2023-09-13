function solve(word) {
    // let result = "";
    // for (let i = word.length - 1; i >= 0; i--) {
    //     result += word[i];
    // }
    // console.log(result)

    let reversedWord = word.split('').reverse().join('');
    console.log(reversedWord);
}
solve('Hello')