function dungeon(data) {
    let initialHealth = 100;
    let initialCoins = 0;
    let commandArray = data[0].split('|');
    let commandArrayLength = commandArray.length;
    let room = 0;
    let isDead = false;

    for (let index = 0; index < commandArrayLength; index++) {
        let [command, value] = commandArray[index].split(' ');
        switch (command) {
            case 'potion': potion(value); break;
            case 'chest': chest(value); break;
            default: fight(command, value); break;
        }
        if (isDead) {
            break;
        }
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${initialCoins}`);
        console.log(`Health: ${initialHealth}`);
    }

    function potion(value) {
        let healedAmmount = 0;
        if ((initialHealth + Number(value)) > 100) {
            healedAmmount = 100 - initialHealth;
            initialHealth = 100;
        } else {
            initialHealth += Number(value);
            healedAmmount = value;
        }
        room++;
        console.log(`You healed for ${healedAmmount} hp.`);
        console.log(`Current health: ${initialHealth} hp.`);
    }

    function chest(value) {
        initialCoins += Number(value);
        console.log(`You found ${Number(value)} coins.`);
        room++;
    }

    function fight(command, value) {
        let monster = command;
        let damage = Number(value);
        room++;
        if ((initialHealth - damage) > 0) {
            initialHealth -= damage;
            console.log(`You slayed ${monster}.`);
        } else {
            console.log(`You died! Killed by ${monster}.`)
            console.log(`Best room: ${room}`);
            isDead = true;
        }
    }

}