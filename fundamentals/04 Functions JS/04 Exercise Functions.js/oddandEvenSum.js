function oddandEvenSum(number){
    let numberAtString = number.toString();
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numberAtString.length; i++) {
        
        let singleNumber = Number(numberAtString[i]);
        if(singleNumber % 2 === 0){
            evenSum += singleNumber;
        }else{
            oddSum += singleNumber;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddandEvenSum(1000435);