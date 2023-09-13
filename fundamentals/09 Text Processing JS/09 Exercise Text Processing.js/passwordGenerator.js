function passwordGenerator(input) {
    let password = input[0].concat(input[1]).split('');
    let replacementLetters = input[2].toUpperCase().split('');

    for (let index = 0; index < replacementLetters.length; index++){
        let replacementLetter = replacementLetters[index];
        for (let letter of password) {
            if (letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122) {
                if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
                    let index = password.indexOf(letter);
                    password.splice(index, 1, replacementLetter);
                    break;
                }
            }
        }
        if ((index === replacementLetters.length - 1) &&
            (password.includes("a") || password.includes("e")
            || password.includes("i") || password.includes("o")
            || password.includes("u"))) {
            index = -1;
        }
    }
    
    console.log(`Your generated password is ${password.reverse().join('')}`);
    
}
passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]
)