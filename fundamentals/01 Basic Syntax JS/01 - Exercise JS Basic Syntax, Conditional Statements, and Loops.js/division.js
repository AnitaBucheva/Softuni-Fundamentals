function division(numbers){
if(numbers % 10 === 0){
    console.log('The number is divisible by 10');
}else if(numbers % 7 === 0){
    console.log('The number is divisible by 7');
}else if(numbers % 6 === 0){
    console.log('The number is divisible by 6');
}else if(numbers % 3 === 0){
    console.log('The number is divisible by 3');
}else if(numbers % 2 === 0){
    console.log('The number is divisible by 2');
}else{
    console.log("Not divisible");
}
}
division(1643);