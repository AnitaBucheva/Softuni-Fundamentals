function solve(num1, num2, num3) {
    let numbers = [num1, num2, num3];
    let sorted = numbers.sort((a, b) => b - a);
    sorted.forEach(number => {
        console.log(number);
    })
}
solve(-2,
    1,
    3,
    )