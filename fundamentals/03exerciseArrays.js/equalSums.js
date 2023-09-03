function equalSums(array){
    let foundIndex = "no";
for (let index = 0; index < array.length; index++){
    let left = 0;
    let right = 0;

    for (let l = 0; l < index; l++) {
       left = left + array[l]; 
    }
    for (let r = index + 1; r < array.length; r++) {
        right = right + array[r];
        
    }
    if(left === right){
        foundIndex = index;
    }
}
console.log(foundIndex);
}
equalSums([1, 2]);