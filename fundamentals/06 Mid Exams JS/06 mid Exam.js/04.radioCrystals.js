function crystalThickness(arr) {
  let desiredThickness = arr[0];

  function cut(chunkSize) {
    let counter = 0; 
    while ((chunkSize / 4) >= desiredThickness) {
      chunkSize = chunkSize / 4;
      counter++  
    }
  
    return counter;
  
  }

  function lap(chunkSize) {
    let counter = 0;
    while ((chunkSize*0.8) >= desiredThickness) {
      chunkSize -= chunkSize * 0.2;
      counter++;
    }
    
    return counter;
  }

  function grind(chunkSize) {
    let counter = 0;
    while ((chunkSize - 20)>= desiredThickness) {
      chunkSize -= 20;
      counter++;
    }

    return counter;
  }

  function etch(chunkSize) {
    let counter = 0;
    while ((chunkSize -2) >= desiredThickness - 1) {
      chunkSize -= 2;
      counter++;

    }

    return counter;
  }

  for (let crystals = 1; crystals < arr.length; crystals++) {
    let currentChunk = arr[crystals];
    console.log(`Processing chunk ${currentChunk} microns`);

    let cutCount = cut(currentChunk);
    if (cutCount > 0) {
      console.log(`Cut x${cutCount}`);
      console.log('Transporting and washing');
      currentChunk = Math.floor(currentChunk / (4 ** cutCount));
    }

    let lapCount = lap(currentChunk);
    if (lapCount > 0) {
      console.log(`Lap x${lapCount}`);
      console.log('Transporting and washing');
      for (let lapCounter = 0; lapCounter < lapCount; lapCounter++){
        currentChunk -= currentChunk * 0.2;
      }
      currentChunk = Math.floor(currentChunk);
    }
    
    let grindCount = grind(currentChunk);
    if (grindCount > 0) {
      console.log(`Grind x${grindCount}`);
      console.log('Transporting and washing');
      currentChunk = Math.floor(currentChunk - 20 * grindCount);
    }

    let etchCount = etch(currentChunk);
    if (etchCount > 0) {
      console.log(`Etch x${etchCount}`);
      console.log('Transporting and washing');
      currentChunk = Math.floor(currentChunk - 2 * etchCount);
    }

    if (currentChunk === desiredThickness - 1) {
      console.log('X-ray x1');
      currentChunk++;
    }

    console.log(`Finished crystal ${currentChunk} microns`);
  }
}
//crystalThickness([1375, 50000]);
crystalThickness([1000, 4000, 8100]);


