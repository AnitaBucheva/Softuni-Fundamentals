function deserializeString(input) {
    let command;
    let result = [];
    while ((command = input.shift()) !== 'end') {
        let letter = command.slice(0, 1);
        let indexes = command.split(`${letter}:`)[1].split('/').map(Number);
        indexes.forEach(index => {
            result[index] = letter;
        })
    }

    console.log(result.join(''));
}
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']

)