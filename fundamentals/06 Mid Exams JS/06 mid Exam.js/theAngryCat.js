function angryCat(arrOfPrize, points, type) {
    let left = 0;
    let right = 0;
    let entryElements = arrOfPrize[points];

    switch (type) {
        case "cheap":
            for (let l = 0; l < points; l++) {
                let currentLeft = arrOfPrize[l];
                if (currentLeft < entryElements) {
                    left += currentLeft;
                }
            }
            for (let j = points + 1; j < arrOfPrize.length; j++) {
                let currentRight = arrOfPrize[j];
                if (currentRight < entryElements) {
                    right += currentRight;
                }
            }
            break;
        case "expensive":
            for (let l = 0; l < points; l++) {
                let currentLeft = arrOfPrize[l];
                if (currentLeft >= entryElements) {
                    left += currentLeft;
                }
            }
            for (let j = points + 1; j < arrOfPrize.length; j++) {
                let currentRight = arrOfPrize[j];
                if (currentRight >= entryElements) {
                    right += currentRight;
                }
            }
            break;
    }
    if (right > left) {
        console.log(`Right - ${right}`);
    } else {
        console.log(`Left - ${left}`);
    }
}
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive") ;

    
