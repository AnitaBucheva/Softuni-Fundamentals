function demo(array){
let lastStep = Number(array[array.length - 1]);

let newArr = [];

for (let index = 0; index < array.length -1; index += lastStep) {
   
        newArr.push(array[index]);   
    }
    console.log(newArr.join(" "));
}


demo(['5', '20', '31', '4', '20', '2']);