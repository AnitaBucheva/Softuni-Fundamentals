function sumFirstAndLastElement(inputArray) {
    let firstElement = Number(inputArray.shift());
    
    let lastElement = Number(inputArray.pop());
    let sum = firstElement + lastElement;
    
    console.log(sum);
}
sumFirstAndLastElement(['20', '30', '40'])