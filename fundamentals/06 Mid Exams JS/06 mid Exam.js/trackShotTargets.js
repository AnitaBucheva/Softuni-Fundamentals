function trackShotTargets([targetsSequence, targetIndices]) {
    
    let targets = targetsSequence.split(' ').map(Number);
  
    for (let i = 0; i < targetIndices.length; i++) {
      let currentIndex = parseInt(targetIndices[i]);
  
      if (currentIndex >= 0 && currentIndex < targets.length && targets[currentIndex] !== -1) {
        let currentValue = targets[currentIndex];
        targets[currentIndex] = -1;
  
        for (let j = 0; j < targets.length; j++) {
          if (targets[j] !== -1) {
            if (targets[j] > currentValue) {
              targets[j] -= currentValue;
            } else {
              targets[j] += currentValue;
            }
          }
        }
      }
    }
  
    let shotTargets = targets.filter(target => target === -1);
    let remainingTargets = targets.filter(target => target !== -1);
  
    console.log(`Shot targets: ${shotTargets.length} -> ${remainingTargets.join(' ')}`);
  }
  trackShotTargets(["24 50 36 70",
  "0",
  "4",
  "3",
  "1",
  "End"])