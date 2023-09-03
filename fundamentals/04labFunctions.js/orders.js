function orders(product, quantity) {
    let totalPrice = 0;

    switch (product) {
        case 'coffee': totalPrice = quantity * 1.5; break;
        case 'water': totalPrice = quantity * 1; break;
        case 'coke': totalPrice = quantity * 1.4; break;
        case 'snacks': totalPrice = quantity * 2; break;
    }

    console.log(totalPrice.toFixed(2));
}
orders("coffee", 2);