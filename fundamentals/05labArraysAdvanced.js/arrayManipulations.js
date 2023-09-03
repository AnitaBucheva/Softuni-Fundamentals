function arrayManipulations(inputArray) {
    let arrayOfNumbers = inputArray[0].split(' ').map(x => Number(x));
    
    for (let index = 1; index < inputArray.length; index++) {
        let currentElementArray = inputArray[index].split(' ');
        let action = currentElementArray[0];
        let value = Number(currentElementArray[1]);
        let insertIndex = Number(currentElementArray[2]);

        switch (action) {
            case 'Add':
                arrayOfNumbers.push(value);
                break;
            case 'Remove':
                for (let i = 0; i < arrayOfNumbers.length; i++) {
                    if (arrayOfNumbers[i] === value) {
                        arrayOfNumbers.splice(i, 1);
                    }
                }
                break;
            case 'RemoveAt':
                arrayOfNumbers.splice(value, 1);
                break;
            case 'Insert':
                arrayOfNumbers.splice(insertIndex, 0, value);
                break;
        }
    }
    console.log(arrayOfNumbers.join(' '));
}
arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)