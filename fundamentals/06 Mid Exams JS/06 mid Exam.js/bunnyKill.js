function bunnyKill(inputArray) {
    let bombBunniesCoords = inputArray.pop().split(' ');
    let inputArrayLength = inputArray.length - 1;
    let matrix = [];
    let killed = 0;
    let totalDamage = 0;
    while (inputArrayLength >= 0) {
        let currentRow = inputArray.slice(0, 1);
        inputArray.shift();
        matrix.push(currentRow);
        inputArrayLength--;
    }
 
    matrix = matrix.map(row => row[0].split(' ').map(Number));
      
 
    for (let i = 0; i < bombBunniesCoords.length; i++) {
        let currentBombCoords = bombBunniesCoords[i].split(',');
        let row = Number(currentBombCoords[0]);
        let col = Number(currentBombCoords[1]);
        let bunnyDamage = matrix[row][col];
        if (bunnyDamage === 0) {
            continue;
        }
        killed++;
        totalDamage += bunnyDamage;
        for (let rows = row - 1; rows <= row + 1; rows++) {
            if (rows < 0 || rows > matrix.length - 1) {
                continue;
            }
            let currentLine = matrix[rows];
            for (let cols = col - 1; cols <= col + 1; cols++) {
                if (cols < 0 || cols > matrix[rows].length - 1) {
                    continue
                }
                let bunnyHealth = matrix[rows][cols];
                if (matrix[rows][cols] === 0) {
                    continue;
                }
                if (bunnyHealth > bunnyDamage) {
                    matrix[rows][cols] -= bunnyDamage;
                } else {
                    matrix[rows][cols] = 0;
                }
            }
        }
 
    }
    for (let rows = 0; rows < matrix.length; rows++) {
        let currentRow = matrix[rows];
        for (let cols = 0; cols < matrix[rows].length; cols++) {
            let currentBunny = matrix[rows][cols];
            if (currentBunny !== 0) {
                totalDamage += currentBunny;
                killed++;
            }
        }
    }
    
    console.log(totalDamage);
    console.log(killed);
}