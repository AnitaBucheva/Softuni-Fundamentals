function sequences(input) {
    input = input
        .map(JSON.parse)
        .map(el => el.sort((a, b) => b - a))
        .map(JSON.stringify);
    [...new Set(input)]
        .map(JSON.parse)
        .sort((a, b) => a.length - b.length)
        .forEach(el => console.log(`[${el.join(', ')}]`));
}

// function sequences(input) {
//     input = input.map(el => JSON.parse(el));
//     input.forEach(el => el.sort((a, b) => b - a));
//     let outputArr = [];
//     for (let i = 0; i < input.length; i++) {
//         let currentArray = input[i];
//         let isUnique = true;
//         for (let j = 0; j < outputArr.length; j++) {
//             let nextArray = outputArr[j];
//             if (nextArray.toString() === currentArray.toString()) {
//                 isUnique = false;
//                 break;
//             }
//         }
//         if (isUnique) {
//             outputArr.push(currentArray);
//         }
//     }
//     outputArr.sort((a, b) => a.length - b.length);
//     outputArr.forEach(el => console.log(`[${el.join(', ')}]`));
// }


sequences(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
)
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
)