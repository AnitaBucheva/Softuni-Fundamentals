function train(arr) {
    let passangerrInTrain = arr.shift().split(" ").map(Number);
    let maxCapacity = Number(arr.shift());

    for (let index = 0; index < arr.length; index++) {
        let currentRow = arr[index].split(" ");
        if (currentRow[0] === "Add") {
            let newWagonPas = Number(currentRow[1]);
            passangerrInTrain.push(newWagonPas);
        } else {
            for (let j = 0; j < passangerrInTrain.length; j++) {
                let passangerInCurrentWagon = passangerrInTrain[j];
                if (passangerInCurrentWagon + Number(currentRow[0]) <= maxCapacity) {
                    passangerrInTrain[j] += Number(currentRow[0]);
                    break;
                }
            }
        }
    }
    console.log(passangerrInTrain.join(" "));

}
train(['32 54 21 12 4 0 23',

    '75',

    'Add 10',

    'Add 0',

    '30',

    '10',

    '75']);