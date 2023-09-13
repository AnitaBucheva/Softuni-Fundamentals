function catalogue(list) {
    list.sort((a, b) => a.localeCompare(b));
    let obj = {};
    
    for (const line of list) {
        let product = line.split(' : ');
        obj[product[0]] = Number(product[1]);
    }

    let firstLetter = 'A'
    let index = 0;
    for (const key in obj) {
        if (index === 0) {
            console.log(key[0]);
            firstLetter = key[0];
        }
        let currentLetter = key[0];
        if (currentLetter !== firstLetter) {
            console.log(currentLetter);
            firstLetter = currentLetter;
        }
        if (key[0] === firstLetter) {
            console.log(`  ${key}: ${obj[key]}`);
        }
        index++;
    }
    

}
catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);