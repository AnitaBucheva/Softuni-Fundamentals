function lastStop(input) {
let numbers = input.shift().split(" ").map(Number);
let comands = input.shift();
while (comands !== "END") {
    let com = comands.split(" ");
    let actions = com[0];
    let paintingnum = Number(com[1]);
    let place = Number(com[2])
let index;
    switch (actions) {
        case "Change":
            index = numbers.indexOf(paintingnum);
            if (index !== -1) {
                numbers[index] = place;
              }
            break;
        case "Hide":
            index = numbers.indexOf(paintingnum);
            if (index !== -1) {
               numbers.splice(index, 1);
              }
            break;
        case "Switch":
            let index1 = numbers.indexOf(paintingnum);
            let index2 = numbers.indexOf(place);
            if (index1 !== -1 && index2 !== -1) {
                [numbers[index1], numbers[index2]] = [numbers[index2], numbers[index1]];
              }
            break;
        case "Insert":
            if (paintingnum >= 0 && paintingnum < numbers.length) {
               numbers.splice(paintingnum + 1, 0, place);
              }
            break;
        case "Reverse":
            numbers.reverse();
            break;
    }
    comands = input.shift() 
    
}

console.log(numbers.join(" "));
}
lastStop(["115 115 101 114 73 111 116 75",
    "Insert 5 114",
    "Switch 116 73",
    "Hide 75",
    "Reverse",
    "Change 73 70",
    "Insert 10 85",
    "END"])