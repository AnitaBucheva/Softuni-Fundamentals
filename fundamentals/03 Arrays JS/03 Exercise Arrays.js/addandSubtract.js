function addAndSubtract(array) {
   let newArrar = [];
   let sumNewArray = 0;
   let sumoldArray = 0;

   for (let index = 0; index < array.length; index++) {
    const element = array[index];
    let even = element + index
    let odd = element - index
    if(element % 2 === 0){
       
newArrar.push(even);
    }else{
newArrar.push(odd);
    }
    sumNewArray += newArrar[index]
    sumoldArray += element
   }

   console.log(newArrar);
   console.log(sumoldArray);
   console.log(sumNewArray);
}
addAndSubtract([5, 15, 23, 56, 35])