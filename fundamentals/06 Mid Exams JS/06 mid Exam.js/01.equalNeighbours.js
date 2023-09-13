function countEqualNeighborPairs(matrix) {
    let count = 0;
  
    // Loop through each row of the matrix
    for (let i = 0; i < matrix.length; i++) {
      // Loop through each element of the row
      for (let j = 0; j < matrix[i].length; j++) {
        // Check if the current element is equal to its right neighbor
        if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j+1]) {
          count++;
        }
  
        // Check if the current element is equal to its bottom neighbor
        if (i < matrix.length - 1 && matrix[i][j] === matrix[i+1][j]) {
          count++;
        }
      }
    }
  
    return count;
}
  
console.log(countEqualNeighborPairs([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
));