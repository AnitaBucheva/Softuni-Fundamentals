function magixMatrix(matrix) {
    let rowSum = 0;
    let isMagic = true;
    for (let array = 0; array < matrix.length; array++) {
        if (array === 0) {
            for (let index = 0; index < matrix[array].length; index++) {
                rowSum += Number(matrix[array][index]);
            }
        } else {
            let nextSum = 0;
            for (let index = 0; index < matrix[array].length; index++) {
                nextSum += Number(matrix[array][index]);
            }
            if (nextSum !== rowSum) {
                isMagic = false;
                break;
            }
        }
    }

    let colSum = 0;
    for (let x = 0; x < matrix.length; x++) {
        if (x === 0) {
            for (let y = 0; y < matrix.length; y++) {
                colSum += matrix[y][x];
            }
        } else {
            let nextSum = 0;
            for (let y = 0; y < matrix.length; y++) {
                nextSum += matrix[y][x];
            }
            if (nextSum !== colSum) {
                isMagic = false;
                break;
            }
        }
    }
    console.log(isMagic);
}
magixMatrix([    // true;
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
// magicMatrice([   // false;
//   [11, 32, 45],
//   [21, 0, 1],
//   [21, 1, 1],
// ]);
// magicMatrice([   // true; 
//   [1, 0, 0],
//   [0, 0, 1],
//   [0, 1, 0],
// ]);