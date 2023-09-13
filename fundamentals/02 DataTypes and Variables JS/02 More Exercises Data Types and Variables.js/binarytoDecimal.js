function solve(binary) {
    let binaryString = binary.toString();
    let decimal = parseInt(binaryString, 2);
    console.log(decimal)
}
solve('00001001');
solve('11110000');