function sorting(input){
    let arrSorted = input.sort((a, b) => a - b);
    let newArr = [];
 
    while(arrSorted.length > 0){
        let num = arrSorted.pop()
        newArr.push(num)
        if(arrSorted.length > 0){
            num = arrSorted.shift()
            newArr.push(num)
        }
    }
 
    console.log(newArr.join(" "));
}