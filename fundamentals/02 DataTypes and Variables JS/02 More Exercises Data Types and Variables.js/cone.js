function solve(radius, height) {
    console.log(`volume = ${(1/3*height*Math.PI*Math.pow(radius, 2)).toFixed(4)}`);
    console.log(`area = ${(Math.PI*Math.pow(radius, 2) + Math.PI*radius*Math.sqrt(Math.pow(height, 2) + Math.pow(radius, 2))).toFixed(4)}`);
}
solve(3,
    5
    )