function calculatePoints(input) {
    let targets = input.shift().split("|").map(Number);
    let points = 0;
  
    while (true) {
      const command = input;
  
      if (command === "Game Over") {
        break;
      }
  
      if (command === "Shoot Left") {
        const [, startIndex, length] = command.split("@").map(Number);
        let currentIndex = startIndex % targets.length;
  
        for (let i = 0; i < length; i++) {
          if (targets[currentIndex] >= 5) {
            points += 5;
            targets[currentIndex] -= 5;
          } else {
            points += targets[currentIndex];
            targets[currentIndex] = 0;
          }
  
          currentIndex--;
          if (currentIndex < 0) {
            currentIndex = targets.length - 1;
          }
        }
      } else if (command === "Shoot Right") {
        const [, startIndex, length] = command.split("@").map(Number);
        let currentIndex = startIndex % targets.length;
  
        for (let i = 0; i < length; i++) {
          if (targets[currentIndex] >= 5) {
            points += 5;
            targets[currentIndex] -= 5;
          } else {
            points += targets[currentIndex];
            targets[currentIndex] = 0;
          }
  
          currentIndex++;
          if (currentIndex >= targets.length) {
            currentIndex = 0;
          }
        }
      } else if (command === "Reverse") {
        targets.reverse();
      }
      command = false;
    }
  
    console.log(targets.join(" - "));
    console.log(`Iskren finished the archery tournament with ${points}!`);
  }
  calculatePoints(["10|10|10|10|10",
  "Shoot Left@0@2",
  "Shoot Right@4@5",
  "Shoot Right@6@5",
  "Reverse",
  "Game over"]);