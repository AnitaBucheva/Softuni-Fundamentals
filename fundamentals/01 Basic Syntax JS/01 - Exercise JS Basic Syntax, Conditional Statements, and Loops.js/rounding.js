function rounding(numbers, nums){
    if(nums > 15){
        nums = 15;
    }
console.log(parseFloat(numbers.toFixed(nums)));
}
rounding(10.5,3)