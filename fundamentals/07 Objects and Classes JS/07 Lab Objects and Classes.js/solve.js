function solve(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let array = [];
    let songsCount = Number(input[0]);
    for (let i = 1; i <= songsCount; i++) {
        let [typeList, name, time] = input[i].split('_');
        let song = new Song(typeList, name, time);
        array.push(song);
    }
    let typeToPrint = input[songsCount + 1];
    if (typeToPrint === 'all') {
        array.forEach(object => {
            console.log(object.name);
        })
    } else {
        array.forEach(object => {
            if (object.typeList === typeToPrint) {
                console.log(object.name);
            }
        })
    }
}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
)