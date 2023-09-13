function muOnline(input) {
    let commandArray = input.split("|");
    let health = 100;
    let bitcoin = 0;
    let roomCount = 0;
    let isGameOver = false;
  
    for (let i = 0; i < commandArray.length; i++) {
      let command = commandArray[i].split(" ");
      let action = command[0];
      let value = Number(command[1]);
  
      switch (action) {
        case "potion":
          potion(value);
          break;
        case "chest":
          chest(value);
          break;
        default:
          fight(value);
          break;
      }
  
      function potion(value) {
        if (health > 0) {
          roomCount++;
          if (health + value > 100) {
            console.log(`You healed for ${100 - health} hp.`);
            health = 100;
            console.log(`Current health: ${health} hp.`);
          } else {
            console.log(`You healed for ${value} hp.`);
            health += value;
            console.log(`Current health: ${health} hp.`);
          }
        }
      }
  
      function chest(value) {
        if (health > 0) {
          roomCount++;
          console.log(`You found ${value} bitcoins.`);
          bitcoin += value;
        }
      }
  
      function fight(value) {
        if (health > 0) {
          roomCount++;
          health -= value;
          if (health <= 0) {
            console.log(`You died! Killed by ${action}.`);
            console.log(`Best room: ${roomCount}`);
            isGameOver = true;
          } else {
            console.log(`You slayed ${action}.`);
          }
        }
      }
    }
  
    if (!isGameOver) {
      console.log("You've made it!");
      console.log(`Bitcoins: ${bitcoin}`);
      console.log(`Health: ${health}`);
    }
  }
  //muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
  muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");