function piratesAndWarships(inputArray) {
    let pirateShipStatus = inputArray[0].split(">");
    let warshipStatus = inputArray[1].split(">");
    let maxHealth = Number(inputArray[2]);
    let index = 3;
    let command;
    let isSunkWarship = false;
    let isSunkPirateShip = false;
  
    while ((command = inputArray[index]) !== "Retire") {
      let commandArray = command.split(" ");
      let action = commandArray[0];
  
      switch (action) {
        case "Fire":
          fire(commandArray);
          if (isSunkWarship) {
            return;
          }
          break;
        case "Defend":
          defend(commandArray);
          if (isSunkPirateShip) {
            return;
          }
          break;
        case "Repair":
          repair(commandArray);
          break;
        case "Status":
          status(commandArray);
          break;
      }
  
      function fire(commandArray) {
        let index = Number(commandArray[1]);
        let damage = Number(commandArray[2]);
        if (index >= 0 && index < warshipStatus.length) {
          let currentHealth = Number(warshipStatus[index]);
          warshipStatus[index] = currentHealth - damage;
          if (warshipStatus[index] <= 0) {
            console.log("You won! The enemy ship has sunken.");
            isSunkWarship = true;
          }
        }
      }
  
      function defend(commandArray) {
        let startIndex = Number(commandArray[1]);
        let endIndex = Number(commandArray[2]);
        let damage = Number(commandArray[3]);
        if (startIndex >= 0 && endIndex < pirateShipStatus.length) {
          for (let i = startIndex; i <= endIndex; i++) {
            let currentHealth = pirateShipStatus[i];
            pirateShipStatus[i] = currentHealth - damage;
            if (pirateShipStatus[i] <= 0) {
              isSunkPirateShip = true;
              console.log("You lost! The pirate ship has sunken.");
              break;
            }
          }
        }
      }
  
      function repair(commandArray) {
        let index = Number(commandArray[1]);
        let health = Number(commandArray[2]);
        if (index >= 0 && index < pirateShipStatus.length) {
          let currentHealth = pirateShipStatus[index];
          if (currentHealth + health > maxHealth) {
            pirateShipStatus[index] = maxHealth;
          } else {
            pirateShipStatus[index] = currentHealth + health;
          }
        }
      }
  
      function status(commandArray) {
        let targetHealth = maxHealth * 0.2;
        let repairSectionsCount = 0;
        for (const el of pirateShipStatus) {
          if (el < targetHealth) {
            repairSectionsCount++;
          }
        }
        console.log(`${repairSectionsCount} sections need repair.`);
      }
      index++;
    }
  
    if (!isSunkPirateShip && !isSunkPirateShip) {
      let pirateShipSum = 0;
      let warshipSum = 0;
  
      for (const el of pirateShipStatus) {
        pirateShipSum += Number(el);
      }
  
      for (const el of warshipStatus) {
        warshipSum += Number(el);
      }
  
      console.log(`Pirate ship status: ${pirateShipSum}`);
      console.log(`Warship status: ${warshipSum}`);
    }
  }
  piratesAndWarships([
    "12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire",
  ]);
  piratesAndWarships([
    "2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire",
  ]);