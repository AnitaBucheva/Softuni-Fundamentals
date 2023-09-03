function checkSign(numOne, numTwo, numThree) {
    if (numOne === 0 || numTwo === 0 || numThree === 0) {
      return "Positive";
    }
  
    function firstPairSign(numOne, numTwo) {
      if ((numOne < 0 && numTwo < 0) || (numOne > 0 && numTwo > 0)) {
        return "Positive";
      } else if ((numOne < 0 && numTwo > 0) || (numOne > 0 && numTwo < 0)) {
        return "Negative";
      }
    }
  
    function lastNumCheck(numThree) {
      if (numThree < 0) {
        return "Negative";
      } else {
        return "Positive";
      }
      }
      
      if (firstPairSign(numOne, numTwo) !== lastNumCheck(numThree)) {
          return 'Negative';
      } else {
          return 'Positive';
      }
  }
  //checkSign(5, 12, -15);
  console.log(checkSign(5, 12, -15));