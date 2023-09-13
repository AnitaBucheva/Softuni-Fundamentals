function cards(input) {
    let game = input.shift().split(":");
  
    for (let index = 0; index < input.length; index++) {
        const curElement = input[index].split(" ");
       let com = curElement.shift();
       let firdt = curElement.shift();
       let sec = curElement.shift();

       switch (com) {
        case "Add":
            if (game.includes(firdt)) {
                game.push(firdt);
              } else {
                console.log('Card not found.');
              }
            break;
        case "Insert":
            if (game.includes(firdt) && sec >= 0 && sec < game.length) {
               game.splice(sec, 0, firdt);
              } else {
                console.log('Error!');
              }
            break;
        case "Remove":
            if (game.includes(firdt)) {
                let index = game.indexOf(firdt);
               game.splice(index, 1);
              } else {
                console.log('Card not found.');
              }
            break;
        case "Swap":
            let index1 = game.indexOf(firdt);
            let index2 = game.indexOf(sec);
            if (index1 !== -1 && index2 !== -1) {
              [game[index1], game[index2]] = [game[index2], game[index1]];
            }
            break;
        case "Ready":
            if (com === "Ready") {
                break;
            }
            break;
         case "Shuffle":
            game.reverse();
            break;
         default:
        console.log('Invalid command.');
       }
    }
    console.log(game.join(" "));
}
cards(["Innervate:Moonfire:Pounce:Claw:Wrath:Bite",
    "Add Moonfire",
    "Add Pounce",
    "Add Bite",
    "Add Wrath",
    "Insert Claw 0",
    "Swap Claw Moonfire",
    "Remove Bite",
    "Shuffle deck",
    "Ready" ])