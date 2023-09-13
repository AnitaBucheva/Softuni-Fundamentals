function tseamAccount(input) {
   let array = input.shift().split(" ");
  let commands = input.shift()
 

  while (commands !== 'Play!') {
let tokens = commands.split(" ")
let comand = tokens[0];
let games = tokens[1];

switch (comand) {
    case "Install":

        if (!games.includes(array)) {
           array.push(games);
        }
        break;
    case "Uninstall":
         
            if(index = ((array.indexOf(games)) !== -1)){
            array.splice(index,1);
         }
        break;
    case "Update":
        if (array.includes(games)) {
            let index = ((array.indexOf(games)) !== -1)
            array.splice(index,1);
            array.push(games);
        }
        break;
    case "Expansion":
        let [gameName, expansionName] = games.split('-');
      if (array.includes(gameName)) {
        let index = array.indexOf(gameName);
        array.splice(index + 1, 0, `${gameName}:${expansionName}`);
      }
        break;
}
    commands = input.shift()
  }
  console.log(array.join(" "));
}
tseamAccount(['CS WoW Diablo',
'Uninstall XCOM',
'Update PeshoGame',
'Update WoW',
'Expansion Civ-V',
'Play!']
)