function radioCrystals(input) {
    let desiredThickness = input[0];
  
    for (let index = 1; index < input.length; index++) {
      let currentCrystal = input[index];
      console.log(`Processing chunk ${currentCrystal} microns`);
      if (currentCrystal / 4 >= desiredThickness) {
        currentCrystal = cut(currentCrystal);
        currentCrystal = transporting(currentCrystal);
      }
  
      if ((currentCrystal - (currentCrystal / 5)) >= desiredThickness) {
        currentCrystal = lap(currentCrystal);
        currentCrystal = transporting(currentCrystal);
      }
  
      if ((currentCrystal - 20) >= desiredThickness) {
        currentCrystal = grind(currentCrystal);
        currentCrystal = transporting(currentCrystal);
      }
  
      if ((currentCrystal - 2) >= (desiredThickness - 1)) {
        currentCrystal = etch(currentCrystal);
        currentCrystal = transporting(currentCrystal);
      }
  
      if (currentCrystal === desiredThickness - 1) {
        currentCrystal = xray(currentCrystal);
      }
      console.log(`Finished crystal ${currentCrystal} microns`)
  
      function cut(currentCrystal) {
        let counter = 0;
        while ((currentCrystal / 4) >= desiredThickness) {
          counter++;
          currentCrystal = currentCrystal / 4;
        }
        console.log(`Cut x${counter}`);
        return currentCrystal;
      }
  
      function transporting(currentCrystal) {
        console.log("Transporting and washing");
        return Math.floor(currentCrystal);
      }
  
      function lap(currentCrystal) {
        let counter = 0;
        while ((currentCrystal - (currentCrystal / 5)) >= desiredThickness) {
          counter++;
          currentCrystal -= currentCrystal / 5;
        }
        console.log(`Lap x${counter}`);
        return currentCrystal;
      }
  
      function grind(currentCrystal) {
        let counter = 0;
        while ((currentCrystal - 20) >= desiredThickness) {
          counter++;
          currentCrystal -= 20;
        }
        console.log(`Grind x${counter}`);
        return currentCrystal;
      }
  
      function etch(currentCrystal) {
        let counter = 0;
        while ((currentCrystal - 2) >= (desiredThickness - 1)) {
          counter++;
          currentCrystal -= 2;
        }
        console.log(`Etch x${counter}`);
        return currentCrystal;
      }
  
      function xray(currentCrystal) {
        console.log("X-ray x1")
        return currentCrystal + 1;
      }
    }
  }
  radioCrystals([1000, 4000, 8100])