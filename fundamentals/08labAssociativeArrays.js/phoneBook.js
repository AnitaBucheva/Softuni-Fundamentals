function phoneBook(input) {
    let result = {};
    for (let line of input) {
        let [name, number] = line.split(' ');
        result[name] = number;
    }

    for (const key in result) {
        console.log(`${key} -> ${result[key]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)