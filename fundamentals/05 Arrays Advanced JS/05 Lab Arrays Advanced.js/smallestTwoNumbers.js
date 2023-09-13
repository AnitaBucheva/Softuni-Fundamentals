function smallestTwoNumbers(inputArray) {
    let smallestNum = 0;
    let secondSmallest = 0;

    for (let i = 0; i < inputArray.length; i++) {
        let currentNum = inputArray[i];
        if (i === 0) {
            smallestNum = currentNum;
            secondSmallest = currentNum;
        } else {
            if (currentNum <= smallestNum) {
                secondSmallest = smallestNum;
                smallestNum = currentNum;
            } 
        }
    }
    console.log(smallestNum, secondSmallest);
}
smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])


//second solution

function smallestTwo(inputArr) {
    inputArr.sort((a, b) => a - b);
    let result = inputArr.slice(0, 2);
    console.log(result.join(' '));

}
smallestTwo([30, 15, 50, 5])
smallestTwo([3, 0, 10, 4, 7, 3])