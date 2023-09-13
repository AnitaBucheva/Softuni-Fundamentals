function modifyNumber(number) {
    let numberToString = number.toString();
    let average = 0;
    while (average <= 5) {
      let sum = 0;
      for (let i = 0; i < numberToString.length; i++) {
        let currentNum = Number(numberToString[i]);
        sum += currentNum;
      }
      average = sum / numberToString.length;
      if (average <= 5) {
        numberToString += "9";
      }
    }
    console.log(Number(numberToString));
  }
  modifyNumber(5835);