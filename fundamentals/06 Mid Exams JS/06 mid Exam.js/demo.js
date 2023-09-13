function demo(input) {
let  seqans = input.shift().split(" ").map(Number);

let currCom = input[0]

while (currCom !== "Finish") {

let tokens = currCom.split(" ");

let actions = tokens[0];
let value = Number(tokens[1]);
let repl = Number(tokens[2]);

switch (actions) {
    case "Add":
        seqans.push(value);
        break;

    case "Remove":
        let index = seqans.indexOf(value)
        if(index !== -1){
            seqans.splice(index, 1);
        }
        break;
    case "Replace":
        let index1 = seqans.indexOf(value)
        if(index1 !== -1){
            seqans[index1] = repl;
        }
        break;

    case "Collapse":
        seqans = seqans.filter(x => x > value); 
        break;
}
 currCom = input.shift();
}
console.log(seqans.join(" "));
}

demo(["1 4 5 19",
"Add 1",
"Remove 4",
"Finish"]);
