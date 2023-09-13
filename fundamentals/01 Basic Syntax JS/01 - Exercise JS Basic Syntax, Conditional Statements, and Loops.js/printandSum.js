function printandSum(start, end){
    let sum = 0;
    let output = "";
for (let index = start; index <= end; index++) {

    sum += index;
    output += `${index} `;
}
console.log(output);
console.log(`Sum: ${sum}`);
}
printandSum(5, 10)