function craftItems(inputArray) {
    let inventory = inputArray[0].split(', ');
    let index = 1;
    let command;

    while ((command = inputArray[index]) !== "Craft!") {
        let commandArray = command.split(' - ');
        let action = commandArray[0];
        let item = commandArray[1];

        switch (action) {
            case 'Collect':
                collect(item);
                break;
            case 'Drop':
                drop(item);
                break;
            case 'Combine Items':
                combine(item);
                break;
            case 'Renew':
                renew(item);
                break;
        }

        function collect(item) {
            if (!inventory.includes(item)) {
                inventory.push(item);
            }
        }

        function drop(item) {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }
        }

        function combine(item) {
            let myArray = item.split(':');
            let oldItem = myArray[0];
            let newItem = myArray[1];
            if (inventory.includes(oldItem)) {
                let index = inventory.indexOf(oldItem);
                inventory.splice(index + 1,0,newItem);
            }
        }

        function renew(item) {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                let renewedItem = inventory.splice(index, 1);
                inventory.push(renewedItem);
            }
        }
        index++;
    }

    console.log(inventory.join(', '));
}
//craftItems(["Iron, Wood, Sword", "Collect - Gold", "Drop - Wood", "Craft!"]);
craftItems([
  "Iron, Sword",
  "Drop - Bronze",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!",
]);