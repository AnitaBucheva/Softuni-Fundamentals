function solve(input) {
    let result = typeof input;
    console.log(result);
    if (result === 'string' || result === 'number') {
        console.log(input);
    } else {
        console.log(`Parameter is not suitable for printing`)
    }
}
solve(null);