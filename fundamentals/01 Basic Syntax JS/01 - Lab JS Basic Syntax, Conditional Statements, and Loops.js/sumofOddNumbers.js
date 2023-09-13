function sumofOddNumbers(n){
    let odd = 1;
    let sum = 0;
for(i = 1; i <= n; i++){
    console.log(odd);
    sum += odd;
    odd += 2;
}
console.log(`Sum: ${sum}`);
}
sumofOddNumbers(5)