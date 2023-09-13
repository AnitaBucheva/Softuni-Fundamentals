function magicMatrices(matrix) {
    let isEqual = true;
    let sum = 0;
  
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            sum += matrix[i][j]  
        }
        break; 
    }
    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        let sumCol = 0;
        for (let col = 0; col < matrix.length; col++) {
            sumRow += matrix[row][col];
            sumCol += matrix[col][row];
        }
        if (sumRow !== sum || sum !== sumCol) {
            isEqual = false;  
        }  
    }
   console.log(isEqual);  
}
magicMatrices()