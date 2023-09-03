function meetings(inputData) {
    const schedule = {};
    for (let line of inputData) {
        let [day, name] = line.split(' ');
        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)