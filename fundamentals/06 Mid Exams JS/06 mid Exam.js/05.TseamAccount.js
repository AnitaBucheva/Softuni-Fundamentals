//better solution
function solve(input) {
  let index = 1;
  let command;
  let startingGames = input[0].split(' ');

  while ((command = input[index]) !== 'Play!') {
    let [action, game] = command.split(' ');
    switch (action) {
      case 'Install': install(game);
        break;
      case 'Uninstall': unistall(game);
        break;
      case 'Update': update(game);
        break;
      case 'Expansion': expansion(game);
        break;
    }

    index++;

    function install(game) {
      if (!startingGames.includes(game)) {
        startingGames.push(game);
      }
    }

    function unistall(game) {
      if (startingGames.includes(game)) {
        let index = startingGames.indexOf(game);
        startingGames.splice(index, 1);
      }
    }

    function update(game) {
      if (startingGames.includes(game)) {
        let index = startingGames.indexOf(game);
        startingGames.splice(index, 1);
        startingGames.push(game);
      }
    }

    function expansion(game) {
      let [gameName, expansionName] = game.split('-');
      if (startingGames.includes(gameName)) {
        let index = startingGames.indexOf(gameName);
        startingGames.splice(index + 1, 0, `${gameName}:${expansionName}`);
      }
    }
  }

  console.log(startingGames.join(' '));
}
//old solution

// function gameAccount(arr) {
//   let gamesArr = arr[0].split(" ");
//   let index = 1;
//   while (arr[index] !== "Play!") {
//     let command = arr[index].split(" ");
//     let action = command[0];
//     let game = command[1];
//     if (action === "Install") {
//       if (!gamesArr.includes(game)) {
//         gamesArr.push(game);
//       }
//     } else if (action === "Uninstall") {
//       if (gamesArr.includes(game)) {
//         let indexInArr = gamesArr.indexOf(game);
//         if (index > -1) {
//           gamesArr.splice(indexInArr, 1);
//         }
//       }
//     } else if (action === "Update") {
//       if (gamesArr.includes(game)) {
//         let indexInArr = gamesArr.indexOf(game);
//         if (index > -1) {
//           gamesArr.splice(indexInArr, 1);
//         }
//         gamesArr.push(game);
//       }
//     } else if (action === "Expansion") {
//       let newExpasion = game.split("");
//         let gameForExpansion = "";
//         let indexInNewExpansion = 0
//       if (newExpasion.includes("-")) {
//          indexInNewExpansion = newExpasion.indexOf("-");
//       }
//       for (let i = 0; i < newExpasion.length; i++) {
//         let currentElement = newExpasion[i];
//         if (currentElement === "-") {
//           newExpasion[i] = ":";
//         }
//         if (i < indexInNewExpansion) {
//           gameForExpansion += newExpasion[i];
//         }
//       }
//       if (gamesArr.includes(gameForExpansion)) {
//         let indexInArr = gamesArr.indexOf(gameForExpansion);
//         gamesArr.splice((indexInArr + 1), 0, newExpasion.join(''));
//       }
//     }
//     index++;
//   }
//     console.log(gamesArr.join(' '));
// }
gameAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
gameAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
