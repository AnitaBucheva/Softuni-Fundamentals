function arrayMethods(arrayOfNumbers, arrayOfCommands) {

    for (let index = 0; index < arrayOfCommands.length; index++) {

        let currentCommand = arrayOfCommands[index].split(' ');
        let action = currentCommand[0];

        switch (action) {
            case 'add':
                let indexPosition = Number(currentCommand[1]);
                let numberToAdd = Number(currentCommand[2]);
                arrayOfNumbers.splice(indexPosition, 0, numberToAdd);
                break;
            case 'addMany':
                let positionToAddFrom = Number(currentCommand[1]);
                for (let i = currentCommand.length - 1; i >= 2 ; i--) {
                    let numberToAdd = Number(currentCommand[i]);
                    arrayOfNumbers.splice(positionToAddFrom, 0, numberToAdd);
                }
                break;
            case 'contains':
                let isIncludedNum = Number(currentCommand[1]);
                if (arrayOfNumbers.includes(isIncludedNum)) {
                    console.log(arrayOfNumbers.indexOf(isIncludedNum));
                } else {
                    console.log('-1');
                }
                break;
            case 'remove':
                let removeFromIndex = Number(currentCommand[1]);
                arrayOfNumbers.splice(removeFromIndex, 1);
                break;
            case 'shift':
                let positions = Number(currentCommand[1]);
                for (let i = 0; i < positions; i++) {
                    let currentNumber = arrayOfNumbers.shift();
                    arrayOfNumbers.push(currentNumber);
                }
                break;
            case 'sumPairs':
                const arrayLength = arrayOfNumbers.length;
                if (arrayLength % 2 === 0) {
                    for (let i = 0; i < arrayLength / 2; i++) {
                        arrayOfNumbers[i] += arrayOfNumbers[i + 1];
                        arrayOfNumbers.splice((i + 1), 1);
                    }
                } else {
                    for (let i = 0; i < Math.floor(arrayLength / 2); i++) {
                        arrayOfNumbers[i] += arrayOfNumbers[i + 1];
                        arrayOfNumbers.splice((i + 1), 1);
                    }
                }
                
                break;
            case 'print':
                console.log('[ ' + arrayOfNumbers.join(', ') + ' ]');
                break;
            default:
                console.log('[ ' + arrayOfNumbers.join(', ') + ' ]');
                break;
        }
    }
}
// arrayMethods([1, 2, 4, 5, 6, 7],
//     ['add 1 8', 'contains 1', 'contains 3', 'print']
// );    
arrayMethods([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'sumPairs', 'sumPairs', 'shift 1', 'print']
);
    