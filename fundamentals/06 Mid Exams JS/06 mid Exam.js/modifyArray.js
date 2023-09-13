function modifyArray(inputArray) {
    let numbers = inputArray[0].split(' ').map(Number);
    let index = 1;
    let command;
    while ((command = inputArray[index]) !== 'end') {
        let commandArray = command.split(' ');
        let action = commandArray[0];

        switch (action) {
            case 'swap':
                swap(numbers);
                break;
            case 'multiply':
                multiply(numbers);
                break;
            case 'decrease':
                decrease(numbers);
                break;
        }
        function swap(numbers) {
            let index1 = Number(commandArray[1]);
            let index2 = Number(commandArray[2]);
            let firstNumber = numbers[index1];
            numbers[index1] = numbers[index2];
            numbers[index2] = firstNumber;
        }

        function multiply(numbers) {
            let index1 = Number(commandArray[1]);
            let index2 = Number(commandArray[2]);
            numbers[index1] = numbers[index1] * numbers[index2];
        }

        function decrease(numbers) {
            let decreasedArray = numbers.map(num => num - 1);
            for (let i = 0; i < decreasedArray.length; i++) {
                numbers[i] = decreasedArray[i];
            }
        }
        index++;
    }

    console.log(numbers.join(' '));
}
modifyArray([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
modifyArray([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);