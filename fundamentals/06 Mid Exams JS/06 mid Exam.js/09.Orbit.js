function orbit(input) {
    let rows = Number(input[0]);
    let cols = Number(input[1]);
    let x = Number(input[2]);
    let y = Number(input[3]);
    let num = 1;
    let matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));
    matrix[x][y] = num;
    num++;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    matrix.forEach(array => {
        console.log(array.join(' '));
    })
}
orbit([4, 4,
    0, 0]
);