function partyTime(input) {
    let vip = [];
    let regular = [];
    let count = 0;
    for (let i = 0; i < input.length; i++) {
        count++;
        let person = input[i];
        if (person != 'PARTY') {
            let firstChar = person[0];
            if (isNaN(firstChar)) {
                regular.push(person);
            } else {
                vip.push(person)
            }
        } else {
            break;
        }
    }
    for (let j = count; j < input.length; j++) {
        let person = input[j];
        if (regular.includes(person)) {
            let index = regular.indexOf(person);
            regular.splice(index, 1);
        } else if (vip.includes(person)) {
            let index = vip.indexOf(person);
            vip.splice(index, 1);
        }
    }
    let size = regular.length + vip.length;
    console.log(size);
    for (let outOfTheParty of vip) {
        console.log(outOfTheParty);
    }
    for (let outOfTheParty of regular) {
        console.log(outOfTheParty);
    }
}
partyTime(['7IK9Yo0h',

'9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])