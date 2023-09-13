function valuesOfAString(input) {
    let type = input[1];
    let sum = 0;
    switch (type) {
        case 'LOWERCASE':
            let charArr = input[0].split('');
            charArr.forEach(char => {
                let charCode = char.charCodeAt();
                if (charCode >= 97 && charCode <= 122) {
                    sum += charCode;
                }
            })
            break;
        case 'UPPERCASE':
            let charArrr = input[0].split('');
            charArrr.forEach(char => {
                let charCode = char.charCodeAt();
                if (charCode >= 65 && charCode <= 90) {
                    sum += charCode;
                }
            })
            break;
    }
    console.log(`The total sum is: ${sum}`);
}
valuesOfAString(['AC/DC',
    'UPPERCASE']

)