function demo(input) {
    let array = input.shift().split(" ").map(Number);
   let commands = input.shift();
 while (commands !== 'end') {
    let command = commands.split(" ");
    let action = command.shift();
   
    let index1 = Number(command[0]);
    let index2 = Number(command[1]);
  
    switch (action) {
        case "swap":
           let temp = array[index1];
           array[index1] = array[index2];
          array[index2] = temp;
            break;
    
        case "multiply":
           array[index1] *= array[index2];
            break;
        case "decrease":
           array = array.map((element) => element - 1);
            break;
    }

    commands = input.shift()
 }
 console.log(array.join(" "));
}
demo( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end']);