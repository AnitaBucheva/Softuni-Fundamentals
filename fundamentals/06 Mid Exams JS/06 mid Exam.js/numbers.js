function findTopNumbers(sequence) {
 
    const numbers = sequence.split(" ").map(Number);
  
    const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  
    const greaterThanAverage = numbers.filter(num => num > average);
  
    const sortedNumbers = greaterThanAverage.sort((a, b) => b - a);
  
    const topNumbers = sortedNumbers.slice(0, 5);
    if (topNumbers.length > 0) {
      console.log(topNumbers.join(" "));
    } else {
      console.log("No");
    }
  }
  findTopNumbers('10 20 30 40 50')