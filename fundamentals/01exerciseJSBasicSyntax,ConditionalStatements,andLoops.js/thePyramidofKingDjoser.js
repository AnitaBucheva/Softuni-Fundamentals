function solve(base, increment) {
    let height = 0;
    let counter = 0;
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapisLazuli = 0;
    let totalGold = 0;
    for (let i = base; i >= 1; i -= 2) {
      counter++;
      height++;
      if (i === 1 || i === 2) {
        let currentGold = i * i;
        totalGold += currentGold;
        break;
      }
      let currentMarble = 0;
      let currentStone = 0;
      let currentLapisLazuli = 0;
      if (counter === 5) {
        counter = 0;
        currentStone = (i - 2) * (i - 2);
        currentLapisLazuli = i * i - currentStone;
      } else {
        currentStone = (i - 2) * (i - 2);
        currentMarble = i * i - currentStone;
      }
      totalStone += currentStone*increment;
      totalLapisLazuli += currentLapisLazuli*increment;
      totalMarble += currentMarble*increment;
    }
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(totalGold*increment)}`);
    console.log(`Final pyramid height: ${Math.floor(height*increment)}`);
  }
  solve(11,
    1
    )