function race(arr) {
    const participants = arr.shift().split(', ').reduce((a, v) => { a[v] = 0; return a }, {})
    const places = { 1: '1st', 2: '2nd', 3: '3rd' }
    arr = arr.map(x => x.split(/[^a-zA-Z0-9]+/g)).map(x => x.filter(X => X !== '')).map(x => x.join(''))

    for (let i = 0; i < arr.length; i++) {
        let name = arr[i].split(/[0-9]+/g).filter(x => x !== '').join('')
        let distance = arr[i]
            .split(/[a-zA-Z]+/g)
            .filter(x => x !== '')
            .join('')
            .split('')
            .map(x => Number(x))
            .reduce((a, v) => a + v, 0)

        if (Object.keys(participants).includes(name)) {
            participants[name] += distance
        }
    }
    const finalTable = Object.entries(participants).sort((x, y) => y[1] - x[1])
    for (let i = 0; i < 3; i++) {
        console.log(`${places[i + 1]} place: ${finalTable[i][0]}`)
    }
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']
)