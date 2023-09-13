function computerStore(inputArr) {
    let price = 0;
    let taxes = 0;
    let index = 0;
    let command;

    while ((command = inputArr[index]) !== 'special' && (command = inputArr[index]) !== 'regular') {
        let currentNumber = Number(command);
        if (currentNumber < 0) {
            console.log("Invalid price!");
        } else {
            price += currentNumber;
        }
        index++;
    }

    if (price === 0 || inputArr.length === 0) {
        console.log('Invalid order!');
    } else {
        taxes = price * 0.2;
        let totalPrice = price + taxes;
        if (command === 'special') {
            totalPrice -= totalPrice * 0.1;
        } 
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
computerStore([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
computerStore([
    'regular'
    ])
            