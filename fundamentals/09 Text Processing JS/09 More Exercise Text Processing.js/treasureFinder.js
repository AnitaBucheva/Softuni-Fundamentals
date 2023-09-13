function treasureFinder(input) {
    let keySequence = input.shift().split(' ').map(Number);
    let command;
    let messages = [];
    while ((command = input.shift()) !== 'find') {
        let stringArr = command.split('').map(x => x.charCodeAt());
        let stringArrLength = stringArr.length;
        let index = 0;
        for (let i = 0; i < keySequence.length; i++) {
            let currentKeyValue = keySequence[i];
            stringArr[index] -= currentKeyValue;
            index++;
            if ((index < stringArrLength) && (i === keySequence.length - 1)) {
                i = -1;
            }
        }
        messages.push(stringArr.map(x => String.fromCharCode(x)).join(''));
    }
    messages.forEach(message => {
        let messageArr = message.split('&');
        let coords = messageArr[2].split('<')[1];
        if (coords.includes('>')) {
            let index = coords.indexOf('>');
            coords = coords.slice(0, index);
        }
        console.log(`Found ${messageArr[1]} at ${coords}`)
    })
}
treasureFinder(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]

)
