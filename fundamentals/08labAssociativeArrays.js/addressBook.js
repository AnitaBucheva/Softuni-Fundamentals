function addressBook(inputData) {
    let person = {};
    inputData.forEach(line => {
        let [name, address] = line.split(':');
        person[name] = address;
    })
    
    let sortedNames = Object.keys(person).sort();
    for (let key of sortedNames) {
        console.log(`${key} -> ${person[key]}`);
    }
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']

)