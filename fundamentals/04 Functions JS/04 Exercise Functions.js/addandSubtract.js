function addandSubtract(first, second, third){

    function add(firstnum, secondnum){

    let sumOfTwoNum = firstnum + secondnum;
    return sumOfTwoNum;
    }
let sum = add(first, second);

    function substract(sumOfTwoNum, last){
    return sumOfTwoNum - last;
    }
let result = substract(sum, third);
    console.log(result);
}
addandSubtract(23, 6, 10);