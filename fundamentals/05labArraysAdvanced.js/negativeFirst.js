function negativeFirst(inputArray) {
    let resultArray = [];
    for (const num of inputArray) {
      if (num < 0) {
        resultArray.unshift(num);
      } else {
        resultArray.push(num);
      }
    }
  
    for (const num of resultArray) {
      console.log(num);
    }
  }
  negativeFirst(["7", "-2", "8", "9"]);