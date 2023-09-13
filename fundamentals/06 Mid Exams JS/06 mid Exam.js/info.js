function demo(input) {
    let items = input.shift().split(", ");

    let index = 0;
    let commands = input[index];
    index++;

   while (commands !== "Craft!") {
    let actions = commands.split(" - ");
  
    switch (actions[0]) {
        case "Collect":
            if(!items.includes(actions[1])){
                items.push(actions[1])
            }
            break;
        case "Drop":
            if(items.includes(actions[1])){
                let indexIt = items.indexOf(actions[1])
                items.splice(indexIt, 1);
            }
            break;
        case "Combine Items":
            let [oldItem, newItem] = actions[1].split(':');
            if (items.includes(oldItem)) {
              let index2 = items.indexOf(oldItem);
             items.splice(index2 + 1, 0, newItem);
        }
            break;
        case "Renew":
            if (items.includes(actions[1])) {
                let index3 = items.indexOf(actions[1]);
                items.splice(index3, 1);
                items.push(actions[1]);
            }
            break;
    }

  commands = input[index];
    index++;
   }
   console.log(items.join(", "));
}
demo([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'])
  