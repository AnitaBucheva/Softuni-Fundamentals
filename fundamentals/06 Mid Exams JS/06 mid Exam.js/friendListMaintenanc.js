function friendListMaintenance(input) {

    let list = input.shift().split(", ");

    let index = 0;
    let com = input[index].split(" ");
    index++;

    let action = com[0];
    let name = com[1];
    let inIndex = Number(com[1]);


    let blacklistedNames = 0;
    let lostNames = 0;

    while (action !== "Report") {

        switch (action) {
            case "Blacklist":
                let index = list.indexOf(name);
                if (index !== -1) {
                    list.splice(index, 1, "Blacklisted");
                    blacklistedNames++;
                    console.log(`${name} was blacklisted.`);
                } else {
                    console.log(`${name} was not found.`);
                }
                break;

            case "Error":
                if (list[inIndex]) {
                    if (list[inIndex] !== "Blacklisted" && list[inIndex] !== "Lost") {
                        let oldName = list[inIndex];
                        list.splice(inIndex, 1, "Lost");
                        lostNames++;
                        console.log(`${oldName} was lost due to an error.`);
                    }
                }
                break;

            case "Change":
                let newName = com[2];
                if (list[inIndex]) {
                    let currentName = list[inIndex];
                    list.splice(inIndex, 1, `${newName}`);
                    console.log(`${currentName} changed his username to ${newName}.`);
                }
                break;

        }

        com = input[index].split(" ");
        action = com[0];
        name = com[1];
        inIndex = Number(com[1]);
        index++;
    }

    console.log(`Blacklisted names: ${blacklistedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(list.join(" "));

}
// friendListMaintenance([
//     "Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"
// ])

// friendListMaintenance([
//     "Mike, John, Eddie, William",
//     "Error 3",
//     "Error 3",
//     "Change 0 Mike123",
//     "Report"
// ])

friendListMaintenance([
    "Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"
])

