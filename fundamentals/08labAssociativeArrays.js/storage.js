function storage(data) {
    let map = new Map();

   for (const line of data) {
       let [item, quantity] = line.split(' ');
       if (map.has(item)) {
           let currentQuantity = map.get(item);
           let newQuantity = Number(currentQuantity) + Number(quantity);
           map.set(item, newQuantity);
       } else {
           map.set(item, quantity);
       }
   }

    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
   }
    
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)