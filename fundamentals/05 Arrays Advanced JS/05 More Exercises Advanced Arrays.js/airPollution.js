function airPollution(inputMatrix, inputCommands) {
    let mapArray = inputMatrix.map(number => number.split(' ').map(Number));
    // let myArray = [];
    // while (inputMatrix.length > 0) {
    //     let row = inputMatrix.slice(0, 1);
    //     myArray.push(row);
    //     inputMatrix.shift();
    // }
    // inputMatrix = myArray.map(row => row[0].split(' ').map(Number));
    
    for (let i = 0; i < inputCommands.length; i++) {
        let currentCommand = inputCommands[i].split(' ');
        let action = currentCommand[0];
        let indexOrValue = Number(currentCommand[1]);
        
        switch (action) {
            case 'breeze':
                breeze(mapArray, indexOrValue);
                break;
            case 'gale':
                gale(indexOrValue);
                break;
            case 'smog':
                smog(indexOrValue);
                break;   
        }

        function breeze(mapArray, indexOrValue) {
            for (let col = 0; col < mapArray.length; col++) {
                let currentParticle = mapArray[indexOrValue][col];
                if (currentParticle - 15 >= 0) {
                    mapArray[indexOrValue][col] -= 15
                } else {
                    mapArray[indexOrValue][col] = 0
                }
            }
            return mapArray
        }

        function gale(indexOrValue) {
            mapArray.forEach(row => {
                row[indexOrValue] -= 20;
              });
        }

        function smog(indexOrValue) {
            mapArray = mapArray.map(row => row.map(element => element + indexOrValue));
        }
    }
    let resultArr = []
    for (let rows = 0; rows < mapArray.length; rows++) {
        let currentRow = mapArray[rows];
        for (let cols = 0; cols < currentRow.length; cols++) {
            if (mapArray[rows][cols] >= 50) {
                resultArr.push(`[${rows}-${cols}]`);
            }
        }
    }
    if (resultArr.length === 0) {
        console.log(`No polluted areas`);
    } else {
        console.log(`Polluted areas: ${resultArr.join(', ')}`);
    }
    
    
}
// airPollution(['5 7 72 14 4',
// '41 35 37 27 33',
// '23 16 27 42 12',
// '2 20 28 39 14',
// '16 34 31 10 24'],
// ['breeze 1', 'gale 2', 'smog 25'])
airPollution(['5 7 3 28 32',
    '41 12 49 30 33',
    '3 16 20 42 12',
    '2 20 10 39 14',
    '7 34 4 27 24'],
    ['smog 11',
    'gale 3',
    'breeze 1',
    'smog 2'])