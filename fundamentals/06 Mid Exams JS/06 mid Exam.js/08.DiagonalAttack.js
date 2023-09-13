function diagonalAttack(input) {
    let matrix = [];
    for (let index = 0; index < input.length; index++) {
        let currentArray = input[index].split(' ').map(Number);
        matrix.push(currentArray);
    }
    let resultMatrix = new Array(input.length).fill().map(() => new Array(input.length).fill(Number.MAX_SAFE_INTEGER));

    let leftDiagonalSum = 0;
    let col = 0;
    for (let row = 0; row < matrix.length; row++) {
        leftDiagonalSum += matrix[row][col];
        resultMatrix[row][col] = matrix[row][col];
        col++;
    }

    let rightDiagonalSum = 0;
    col = matrix[0].length - 1;
    for (let row = 0; row < matrix.length; row++) {
        rightDiagonalSum += matrix[row][col];
        resultMatrix[row][col] = matrix[row][col];
        col--;
    }

    
    if (leftDiagonalSum === rightDiagonalSum) {
        for (let row = 0; row < resultMatrix.length; row++) {
            for (let col = 0; col < resultMatrix[row].length; col++) {
                if (resultMatrix[row][col] === Number.MAX_SAFE_INTEGER) {
                    resultMatrix[row][col] = leftDiagonalSum;
                }
            }
        }
        resultMatrix.forEach(line => {
            console.log(line.join(' '));
        })
    } else {
        matrix.forEach(line => {
            console.log(line.join(' '));
        })
    }
} 
diagonalAttack(['1 1 1',
                '1 1 1',
                '0 1 0']);