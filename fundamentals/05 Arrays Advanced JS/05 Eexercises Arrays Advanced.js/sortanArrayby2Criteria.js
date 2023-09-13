function sortanArrayby2Criteria(array){
let sortArr = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
sortArr.forEach(element => {
    console.log(element);
});
}
sortanArrayby2Criteria(['alpha',

'beta',

'gamma']);