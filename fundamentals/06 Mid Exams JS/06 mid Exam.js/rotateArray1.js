function rotateArray(array) {
    let rotate = array.pop();
    let newArr =array.slice();

   for (let index = 0; index < rotate; index++) {
    const element = newArr.pop()
    newArr.unshift(element)
    
   }
   console.log(newArr.join(" "));
}
rotateArray(['Banana', 'Orange', 'Coconut',
'Apple', '15'])