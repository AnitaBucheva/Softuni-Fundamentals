function memoryGame(inputArray) {
    let sequence = inputArray[0].split(" ");
    let index = 1;
    let command;
    let moves = 0;
    while ((command = inputArray[index]) !== "end") {
      command = command.split(" ");
      let firstIndex = command[0];
      let secondIndex = command[1];
      moves++;
      if (
        firstIndex === secondIndex ||
        firstIndex < 0 ||
        secondIndex < 0 ||
        firstIndex > sequence.length - 1 ||
        secondIndex > sequence.length - 1
      ) {
        sequence.splice(sequence.length / 2, 0, `-${moves}a`, `-${moves}a`);
        console.log("Invalid input! Adding additional elements to the board");
      } else {
          if (sequence[firstIndex] === sequence[secondIndex]) {
              console.log(
                `Congrats! You have found matching elements - ${sequence[firstIndex]}!`
              );
              let element = sequence[firstIndex];
              sequence.splice(sequence.indexOf(element), 1);
              sequence.splice(sequence.indexOf(element), 1);
          } else {
              console.log("Try again!");
          }
          if (sequence.length === 0) {
              console.log(`You have won in ${moves} turns!`);
              return;
          } 
      }
  
      index++;
      }
      
      if (sequence.length > 0) {
          console.log("Sorry you lose :(");
          console.log(sequence.join(' '));
      }
  }
  //memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
  //memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
  memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
  
  