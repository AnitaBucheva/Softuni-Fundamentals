function sorting(arr){
let sortedArr = arr.sort((a, b) => a - b);
let result = [];

for (let index = 0; index < sortedArr.length; index++) {
  let lastEl = sortedArr.pop();
  let firstArr = sortedArr.shift();
  result.push(lastEl);
  result.push(firstArr); 
}
result.push(sortedArr.pop());
result.push(sortedArr. shift());
console.log(result.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);