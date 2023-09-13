// function extract(arr) {
//     const r = /(?:^| )([A-Za-z0-9]+[-._]*)+\b@([a-zA-Z]+\-*[a-zA-Z]+\.[a-zA-Z]+\-*[a-zA-Z]+)(\.*[a-zA-Z]+\-*[a-zA-Z]+)*/g
//     const matches = arr[0].match(r) || []

//     matches.map(x => x.trim()).forEach(x => console.log(x))
// }
// extract("Please contact us at: support@github.com.")

extractEmails = ([input = '']) => {
    let pattern = /(?<=\s)[a-z0-9]+([\._-]?[a-z0-9]+)?@[a-z]+\-?[a-z]+(\.[a-z]+\-?[a-z])+/g;
    while ((result = pattern.exec(input))) {
        console.log(result[0]);
    }
};