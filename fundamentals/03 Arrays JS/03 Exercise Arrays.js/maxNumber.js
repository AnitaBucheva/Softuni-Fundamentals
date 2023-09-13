function maxNumber(array){
let resultArray = [];
for (let index = 0; index < array.length; index++){
    let isBigger = true;
    let currNumb = array[index];
 for (let k = index + 1; k < array.length; k++) {
        if(currNumb <= array[k]){
            isBigger = false;
        } 
    }
    if(isBigger){
        resultArray.push(array[index])
    }
}
console.log(resultArray.join(' '));
}
maxNumber([1, 4, 3, 2])