function calculateFactorialDivision(num1, num2) {
    // Calculate the factorials of num1 and num2
    let factorial1 = 1;
    let factorial2 = 1;
    for (let i = 1; i <= num1; i++) {
      factorial1 *= i;
    }
    for (let i = 1; i <= num2; i++) {
      factorial2 *= i;
    }
    
    const result = (factorial1 / factorial2).toFixed(2);
    console.log(`${result}`);
}
calculateFactorialDivision(5, 2);
