function commonElements(firstArray, secondArray) {
    for (let index = 0; index < firstArray.length; index++) {
        const curElement = firstArray[index];

        for (let i = 0; i < secondArray.length; i++) {
            const element = secondArray[i];
            
            if (curElement === element) {
                console.log(curElement);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l'])