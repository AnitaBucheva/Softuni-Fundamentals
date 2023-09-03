function productsList(inputArray) {
    let sorted = inputArray.sort();
    let num = 1;
    for (const product of inputArray) {
        console.log(`${num}.${product}`);
        num++;
    }
}
productsList(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
//productsList(['Watermelon', 'Banana', 'Apples'])