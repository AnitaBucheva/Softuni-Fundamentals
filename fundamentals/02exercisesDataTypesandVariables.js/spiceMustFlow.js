function solve(startingYield) {
    let yieldLeft = startingYield;
    let totalExtracted = 0;
    let counter = 0;

    while (yieldLeft >= 100) {
        counter++;
        totalExtracted += (yieldLeft - 26);
        yieldLeft -= 10;
    }
    if (totalExtracted >= 26) {
        totalExtracted -= 26;
    }
    
    console.log(counter);
    console.log(totalExtracted);
}
solve(450)