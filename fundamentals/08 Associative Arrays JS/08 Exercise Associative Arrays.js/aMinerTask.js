function aMinerTask(array) {
    let collection = {};
    for (let index = 0; index < array.length; index +=2) {
        const resource = array[index];
        const quantity = Number(array[index + 1]);
        if(!collection.hasOwnProperty(resource)){
            collection[resource] = 0;
        }
        collection[resource] += quantity;
    }
    for (const item in collection) {
       console.log(`${item} -> ${collection[item]}`);
        }
    }

aMinerTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])