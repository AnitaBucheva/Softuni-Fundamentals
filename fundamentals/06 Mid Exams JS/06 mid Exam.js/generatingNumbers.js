function generatingNumbers(input) {

    let numbers = input.shift().split(' ');
    let row = input.shift().split(' ');
    let resultArr = [];
    let findOddEevenEl = [];

    while (row[0] !== 'END') {
        let command = '';
        let removeCommand = '';
        let numAfterCommand = '';
        let oldReplace = 0;
        let newReplace = 0;

        if (row[0] === 'add') {
            command = 'add to start';
            //    removeCommand = row.splice(0, 3);
                numAfterCommand = row.splice(3);
        }
        if (row[0] === 'remove') {
            if (row[1] === 'greater') {
                command = 'remove greater than';
            //    removeCommand = row.splice(0, 3);
                numAfterCommand = row.splice(3);
            } else {
                command = 'remove at index';
            //    removeCommand = row.splice(0, 3);
                numAfterCommand = row.splice(3);
            }
        }
        if (row[0] === 'replace') {
            command = 'replace';
            oldReplace = row[1];
            newReplace = row[2];
        } 
        if (row[0] === 'find') {
            if (row[1] === 'even') {
                command = 'find even';
            } else {
                command = 'find odd';
            }
        }

        switch (command) {
            
            case 'add to start':
                resultArr = numAfterCommand.concat(numbers);
                break;

            case 'remove greater than':
                for (let index = 0; index <= resultArr.length; index++) {
                    const element = resultArr[index];
                    if (element >= Number(numAfterCommand)) {
                        resultArr.splice(index,1);
                    }
                }
                break;

            case 'replace':
                    const index = numbers.indexOf(oldReplace);
                    numbers.splice(index, 1, newReplace);
                break;

            case 'remove at index':
                for (let index = 0; index <= numbers.length; index++) {
                    if (index === Number(numAfterCommand)) {
                        numbers.splice(index,1);
                    }
                }
                break;

            case 'find even':
                for (let index = 0; index < resultArr.length; index++) {
                    const element = resultArr[index];
                    if (element % 2 === 0) {
                        //findOddEevenEl = findOddEevenEl.push(element);
                        console.log(element);
                    }
                }
                break;

            case 'find odd':
                for (let index = 0; index < resultArr.length; index++) {
                    const element = resultArr[index];
                    if (element % 2 != 0) {
                        //findOddEevenEl = findOddEevenEl.push(element);
                        console.log(element);
                    }
                }
                break;

        }

        row = input.shift().split(' ');
    }

    console.log(resultArr.join(', '));
}

generatingNumbers(["1 2 3 10 10 6 4 10",
"add to start 1 2 3", // 1 2 3 1 2 3 10 10 6 4 10
"remove greater than 5", // 1 2 3 1 2 3 4
// "find even",
"END"]);