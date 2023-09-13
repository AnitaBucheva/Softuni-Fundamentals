function solve(n) {
    let num = Number(n);
    for (let firstLetter = 97; firstLetter < 97 + num; firstLetter++) {
        for (let secondLetter = 97; secondLetter < 97 + num; secondLetter++) {
            for (let thirdLetter = 97; thirdLetter < 97 + num; thirdLetter++) {
                console.log(`${String.fromCharCode(firstLetter)}${String.fromCharCode(secondLetter)}${String.fromCharCode(thirdLetter)}`)
            }
        }
    }
}
solve('3');