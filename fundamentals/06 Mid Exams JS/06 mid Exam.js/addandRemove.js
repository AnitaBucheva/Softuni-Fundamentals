function common(array) {
    let arrayNew = [1];
    for (let index = 0; index < array.length - 1; index++) {
      if(array[index] === "add"){
        arrayNew.push(arrayNew[index] + 1)
      }else if(array[index] === "remove"){
        arrayNew.pop();
      }
        
    }
    if(arrayNew.length === 0){
        console.log("Empty")
    }else{
        console.log(arrayNew.join(" "));
    }
}
common(['add', 'add', 'add', 'add'])