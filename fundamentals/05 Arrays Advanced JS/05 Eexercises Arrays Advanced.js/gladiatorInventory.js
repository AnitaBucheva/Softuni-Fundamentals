function gladiatorInventory(inputArray) {
    let inventory = inputArray[0].split(' ');
    
    for (let index = 1; index < inputArray.length; index++) {
        let currentCommand = inputArray[index].split(' ');
        let action = currentCommand[0];
        let equipment = currentCommand[1];
        
        switch (action) {
            case 'Buy':
                buy(equipment);
                break;
            case 'Trash':
                trash(equipment);
                break;
            case 'Repair':
                repair(equipment);
                break;
            case 'Upgrade':
                upgrade(equipment)
                break;
            
        }
    }

    function buy(equipment) {
        if (!(inventory.includes(equipment))) {
            inventory.push(equipment);
        }
    }

    function trash(equipment) {
        if ((inventory.includes(equipment))) {
            let indexOfEquipment = inventory.indexOf(equipment);
            inventory.splice(indexOfEquipment, 1);
        }
    }

    function repair(equipment) {
        if ((inventory.includes(equipment))) {
            let indexOfEquipment = inventory.indexOf(equipment);
            let removedItem = inventory.splice(indexOfEquipment, 1).join(' ');
            inventory.push(removedItem);
        }
    }

    function upgrade(equipment) {
        let upgradeArray = equipment.split('-');
        let itemToUpgrade = upgradeArray[0];
        let addOn = upgradeArray[1];
        let addItem = `${itemToUpgrade}:${addOn}`
        if ((inventory.includes(itemToUpgrade))) {
            let indexOfUpgrade = inventory.indexOf(itemToUpgrade);
            inventory.splice(indexOfUpgrade+1, 0, addItem);
        }
    }

    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']
)