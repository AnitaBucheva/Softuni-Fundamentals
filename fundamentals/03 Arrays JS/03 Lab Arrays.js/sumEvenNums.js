function sumEvenNums(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        if (currentNum % 2 === 0) {
            sum += currentNum;
        }
    }
    console.log(sum);
}
sumEvenNums(['1','2','3','4','5','6'])