function sumDigits(num){
    let numString = num.toString();
    let sum = 0;
for (let index = 0; index < numString.length; index++) {
    let curentdijit = Number(numString[index]);
  sum += curentdijit
}
console.log(sum);
}
sumDigits(245678);