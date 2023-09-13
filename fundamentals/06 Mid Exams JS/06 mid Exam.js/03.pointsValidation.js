function pointsValidation(arrayOfPoints) {
    let x1 = arrayOfPoints[0];
    let y1 = arrayOfPoints[1];
    let x2 = arrayOfPoints[2];
    let y2 = arrayOfPoints[3];
    let x = 0;
    let y = 0;
    function isValid(num1, num2, num3, num4) {
        let result = Math.sqrt((num3 - num1) ** 2 + (num4 - num2) ** 2);
        return Number.isInteger(result);
    }

    if (isValid(x1, y1, x, y)) {
        console.log(`{${x1}, ${y1}} to {${x}, ${y}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x}, ${y}} is invalid`);
    }

    if (isValid(x2, y2, x, y)) {
        console.log(`{${x2}, ${y2}} to {${x}, ${y}} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {${x}, ${y}} is invalid`);
    }

    if (isValid(x1, y1, x2, y2)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
    
}
pointsValidation([2, 1, 1, 1])