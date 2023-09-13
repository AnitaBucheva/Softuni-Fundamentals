function guineaPig(inputArray) {
    let foodPerMonth = Number(inputArray[0])*1000;
    let hayPerMonth = Number(inputArray[1])*1000;
    let coverPerMonth = Number(inputArray[2])*1000;
    let weight = Number(inputArray[3])*1000;
    let isEnough = true;

    for (let i = 1; i <= 30; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            foodPerMonth -= 300;
            hayPerMonth -= foodPerMonth * 0.05;
            coverPerMonth -= weight / 3;
        } else if (i % 3 === 0) {
            foodPerMonth -= 300;
            coverPerMonth -= weight / 3;
        } else if (i % 2 === 0) {
            foodPerMonth -= 300;
            hayPerMonth -= foodPerMonth * 0.05;
        } else {
            foodPerMonth -= 300;
        }
        
            
        if (foodPerMonth <= 0 || hayPerMonth <= 0 || coverPerMonth <= 0) {
            isEnough = false;
            break;
        }
    }

    if (isEnough) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodPerMonth/1000).toFixed(2)}, Hay: ${(hayPerMonth/1000).toFixed(2)}, Cover: ${(coverPerMonth/1000).toFixed(2)}.`);
    } else {
        console.log("Merry must go to the pet store!");
    }
}
guineaPig(["10", "5", "5.2", "1"]);
guineaPig(["1", "1.5", "3", "1.5"]);