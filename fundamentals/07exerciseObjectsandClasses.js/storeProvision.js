function storeProvision(available, delivery) {
const storedProduct = {};
const availableLengtht = available.length;
const deliveryLength = delivery.length;

for (let index = 0; index < availableLengtht; index += 2) {
    const currentProduct = available[index];
    storedProduct[currentProduct]= Number(available[index + 1]);
}
for (let index = 0; index < deliveryLength; index += 2) {
    const currentProduct = delivery[index];
    if(!storedProduct.hasOwnProperty(currentProduct)){
        storedProduct[currentProduct] = 0; 
    }
    storedProduct[currentProduct]+= Number(delivery[index + 1]);
}
    for (const product in storedProduct) {
      console.log(`${product} -> ${storedProduct[product]}`);
            
        }
    
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ])