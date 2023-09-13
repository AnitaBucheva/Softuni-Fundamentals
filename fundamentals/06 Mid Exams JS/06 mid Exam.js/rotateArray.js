function demo(array,) {
    let element = Number(array.pop());
    for (let index = 0; index < element; index++) {
     let last = array.pop()
        array.unshift(last)
    }
    console.log(array.join(' '));
}
demo(['1', '2', '3', '4', '2'])
  