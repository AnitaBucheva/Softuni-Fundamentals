function distanceBetweenPoints(x1, y1, x2, y2){
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;
    let dictance = Math.sqrt((deltaX ** 2) + (deltaY ** 2));
    console.log(dictance);
}
distanceBetweenPoints()