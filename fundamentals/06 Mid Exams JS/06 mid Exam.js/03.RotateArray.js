function rotateArray(input) {
  let rotationCount = Number(input[input.length - 1]);
  input.pop();
  let resultArr = [];
  let trialArr = input;
  for (let rotations = 0; rotations < rotationCount; rotations++) {
    for (let i = 0; i < trialArr.length; i++) {
      if (i === 0) {
        resultArr.push(trialArr[trialArr.length - 1]);
      } else {
        resultArr.push(trialArr[i-1]);
      }
    }
      trialArr = resultArr;
      resultArr = [];
  }
  console.log(trialArr.join(' '));
}
rotateArray(["1", "2", "3", "4", "2"]);

rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);
