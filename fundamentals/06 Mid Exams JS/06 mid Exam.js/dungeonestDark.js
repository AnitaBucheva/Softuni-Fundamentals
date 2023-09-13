function dungeonestDark(array) {
    let newArray = array[0].split("|")
    let hp = 100;
    let coins = 0;
    let bestRoom = 0;
    let healingNumber = 0;
 
 
    for (let i = 0; i < newArray.length; i++) {
        bestRoom++;
        let command = newArray[i].split(" ")
        if (command[0] === 'potion') {
            let currentHealth = hp;
 
            healingNumber = Number(command[1])
            hp = currentHealth + healingNumber;
 
            if (hp > 100) {
                hp = 100;
                healingNumber = hp - currentHealth;
            }
            console.log(`You healed for ${healingNumber} hp.`);
            console.log(`Current health: ${hp} hp.`);
        } else if (command[0] === 'chest') {
            coins += Number(command[1]);
            console.log(`You found ${command[1]} coins.`);
        } else {
            hp -= Number(command[1])
            if (hp > 0) {
                console.log(`You slayed ${command[0]}.`);
            } else {
                console.log(`You died! Killed by ${command[0]}.`);
 
                console.log(`Best room: ${i + 1}`);
                return;
            }
        }
    }
 
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${hp}`);
}
 
dungeonestDark(["rat 10|bat 20|potion 130|rat 10|chest 100|boss 70|chest 1000"])