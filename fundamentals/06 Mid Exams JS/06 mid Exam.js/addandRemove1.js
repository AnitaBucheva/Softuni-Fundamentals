function addandremove(array) {
    let newArr = [];
    let number = 1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (element === "add") {
            newArr.push(number);
        } else if (element === "remove") {

            newArr.pop();
        }
    }
    if (newArr.length === 0) {
        console.log("Empty");
    }
    number++;

    console.log(newArr.join(" "));
}
addandremove(['remove', 'remove', 'remove']);