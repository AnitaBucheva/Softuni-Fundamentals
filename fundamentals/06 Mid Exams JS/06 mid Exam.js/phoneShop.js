function phoneShop(input){
    let rowPhones = input.shift();
    let commands = input.slice();
    let phones = rowPhones.split(', ');
    let currentLine = commands.shift();

    while (currentLine != 'End') {
        let lineArgs = currentLine.split(' - ');
        let command = lineArgs[0];
        let firsArgument = lineArgs[1];
        let secondArgument = lineArgs[2];

        switch (command) {
            case 'Add':
                if (!phones.includes(firsArgument)) {
                    phones.push(firsArgument);
                }
                break;
            case 'Remove':
                if (phones.includes(firsArgument)) {
                    const indexRemove = phones.indexOf(firsArgument);
                    if (indexRemove > -1) {
                    phones.splice(indexRemove, 1);
                    }
                }
                break;
            case 'Bonus phone':
                let arg = firsArgument.split(':');
                let secondArg = arg[0];
                let tirthArg = arg[1];
                if (phones.includes(secondArg)) {
                phones.push(tirthArg);
                }
                break;
            case 'Last':
                if (phones.includes(firsArgument)) {
                    const indexFrom = phones.indexOf(firsArgument);
                    const element = phones.splice(indexFrom, 1)[0];
                    // console.log(indexFrom);
                    // console.log(element);
                    if (indexFrom > -1) {
                        phones.splice(1, 0, element);
                    }
                }
                break;
            }
        currentLine = commands.shift();
    }
        console.log(phones.join(', '));
}

phoneShop(["HuaweiP20, XiaomiNote","Remove - Samsung","Bonus phone - XiaomiNote:Iphone5","End"]);