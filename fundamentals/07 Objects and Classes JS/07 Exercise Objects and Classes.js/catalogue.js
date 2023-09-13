function catalogue(input) {
    let obj = {};

    for (const line of input) {
        let [item, price] = line.split(' : ');
        obj[item] = price;
    }

    const sortedObject = Object.keys(obj).sort((a, b) => a.localeCompare(b));
    let firstLetter = sortedObject[0][0];
    for (let i = 0; i < sortedObject.length; i++) {
        let currentLetter = sortedObject[i][0];
        if (i === 0) {
            console.log(firstLetter);
            console.log(`  ${sortedObject[i]}: ${obj[sortedObject[i]]}`);
        } else {
            if (firstLetter === currentLetter) {
                console.log(`  ${sortedObject[i]}: ${obj[sortedObject[i]]}`);
            } else {
                firstLetter = currentLetter;
                console.log(currentLetter);
                console.log(`  ${sortedObject[i]}: ${obj[sortedObject[i]]}`);
            }
        }
    }
}
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);