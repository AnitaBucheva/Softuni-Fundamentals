function addOrRemove(array) {
    let result = [];
    let curNumb = 0;
    for (let index = 0; index < array.length; index++) {
        curNumb++;
        const element = array[index];
        switch (element) {
            case "add":
                result.push(curNumb);
                break;

            case "remove":
                result.pop()
                break;
        }

        if (result === 0) {
            console.log("Empty");
        } else {
            console.log(result.join(" "));
        }
    }

}

addOrRemove(['add', 'add', 'add', 'add'])
