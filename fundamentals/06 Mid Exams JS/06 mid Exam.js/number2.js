function exam2(input){
    let arr = input[0].split(" ").map(Number);
    let commands = input.slice(1)
     
    for(let i = 0; i < commands.length; i++){
        let tokkens = commands[i].split(" ")
        let command = tokkens[0];
        let parameters = tokkens.slice(1).map(Number);
        if(command === "Finish"){
            return arr.join(" ");
        }
        arr = execute(command, parameters, arr);
        }
     
     function execute(command, parameters, arr){
        switch(command){
            case "Add": arr.push(parameters[0]);return arr;
            case "Remove":let index1 = arr.indexOf(parameters[0])
            if(index1 > -1){
                arr.splice(index1, 1);
            }; return arr;
            case "Replace": let index = arr.indexOf(parameters[0])
            if(index !== -1){
                arr[index] = parameters[1]
            }; return arr;
            case "Collapse": arr = arr.filter(x => x > parameters[0]); return arr;
     }
    return arr;
    }
     
    }