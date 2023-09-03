function solve(stringOne, char, stringTwo) {
    let newString = "";
    for (let i = 0; i < stringOne.length; i++) {
        
        if (stringOne[i] === "_") {
            newString += char;
        } else {
            newString += stringOne[i];
        }
    }
    if (newString === stringTwo) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}
solve('Str_ng', 'i',

'String')