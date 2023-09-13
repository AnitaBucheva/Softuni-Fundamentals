function distinctArray(array){

let uniqueNumberArray = [];
let arrLength = array.length;

for (let index = 0; index < arrLength; index++) {
    if(!uniqueNumberArray.includes(array[index])){
        uniqueNumberArray.push(array[index]);
    } 
}
console.log(uniqueNumberArray.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3,

    4, 1, 2]);