function pyramid(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let step = base;
    let count = 0;
   
    while (step > 0) {
      count++;
   
      let outer = step > 2 ? (step - 2) * 2 : 0;
      let inner = (step - 1) * (step - 1) - outer;
      let stepStone = inner * increment;
      let stepMarble = outer > 0 ? (step * 4 - 4) * increment : 0;
      let stepLapis = 0;
   
      if (count % 5 === 0) {
        stepLapis = stepMarble;
        stepMarble = 0;
      }
   
      stone += stepStone;
      marble += stepMarble;
      lapis += stepLapis;
   
      step -= 2;
      height += increment;
    }
   
    gold = increment;
   
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height / increment)}`);
  }
   
  pyramid(11, 1);