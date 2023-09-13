function demo(n, array) {
    let arr = [];

   for (let index = 0; index <n; index++) {
    const element = array[index];
    
    arr.push(element)
   
   }
   let rev = arr.reverse().join(" ")
   console.log(rev);
   
}
demo(4, [-1, 20, 99, 5]);