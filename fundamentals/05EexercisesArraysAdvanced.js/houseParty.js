function houseParty(arr) {
    let guestArr = [];
    for (const el of arr) {
        let command = el.split(" ");
        let name = command[0];

        if(command.length === 3){
         if(guestArr.includes(name)){
            console.log(`${name} is already in the list!`);
         }else{
            guestArr.push(name);
         }
        }else{
            if (!guestArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            }else{
                let index = guestArr.indexOf(name);
                guestArr.splice(index, 1);
            }
        }
    }
    console.log(guestArr.join("\n"));
}
houseParty(['Tom is going!',

'Annie is going!',

'Tom is going!',

'Garry is going!',

'Jerry is going!']);