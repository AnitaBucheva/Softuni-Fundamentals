function solve(input) {
    let assocArr = {};
    for (const line of input) {
        let name = '';
        for (let i = 0; i < line.length; i++) {
            if (line[i] !== ' ') {
                name += line[i];
            } else {
                break;
            }
        }
        let grades = line.split(name + ' ')[1];
        if (assocArr.hasOwnProperty(name)) {
            assocArr[name] += ` ${grades}`;
        } else {
            assocArr[name] = grades;
        }
    }
    const sortedNames = Object.keys(assocArr).sort();

    for (const name of sortedNames) {
        let gradesArray = assocArr[name].split(' ').map(Number);
        let gradesCount = gradesArray.length;
        let averageGrade = (gradesArray.reduce((a, b) => a + b) / gradesCount).toFixed(2);
        console.log(`${name}: ${averageGrade}`);
    }
}