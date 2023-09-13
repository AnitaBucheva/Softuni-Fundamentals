function triangleofNumbers(num) {
   for (let index = 1; index <= num; index++) {
    let row = "";
    for (let j = 0; j < index; j++) {
      row += `${index} ` ; 
    }
console.log(row);
   } 
}
triangleofNumbers(3)