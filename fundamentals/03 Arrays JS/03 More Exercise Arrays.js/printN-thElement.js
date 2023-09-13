function printNthElement(array) {
    
let step = Number(array.pop());
let buf = "";
for (let index = 0; index < array.length; index += step) {
    const element = array[index];
   
    buf += element + " ";
    
}

console.log(buf);
}
printNthElement(['5', '20', '31', '4', '20', '2']);
