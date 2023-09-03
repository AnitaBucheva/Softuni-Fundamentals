function mergeArrays(furstArr, secondArr){
let resultArr = [];

for(let index = 0; index < furstArr.length; index++) {

   if(index % 2 === 0) {
    resultArr.push(Number(furstArr[index]) + Number(secondArr[index]));
   }else{
    resultArr.push((furstArr[index]) + (secondArr[index]));
   }
}
console.log(resultArr.join(" - "));
}
mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11']);