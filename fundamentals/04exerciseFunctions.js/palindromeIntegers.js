function palindromeIntegers(array){

for (let index = 0; index < array.length; index++) {

   let numberAsStrin = array[index].toString();
   let reversedString = numberAsStrin.split('').reverse().join('');
   if(numberAsStrin === reversedString){
    console.log(true);
   }else{
    console.log(false);
   }
    
}
}
palindromeIntegers([123,323,421,121]);