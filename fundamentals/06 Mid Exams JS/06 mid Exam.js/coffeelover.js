function coffeLov (input){
    let coffeTypes = input.shift().split(` `);
    let comandCount = Number(input.shift());
    let comand = input.shift().split(` `)
    comandCount--
    while(comandCount>=0){
       if (comand[0] == "Include"){
        coffeTypes.push(comand[1])
       }
 
       if(comand[0] == "Remove"){
        if(comand[1] == "first"){
            for(let i = 0; i < Number(comand[2]); i++){
            coffeTypes.shift();
            }
        }else if(comand[1] == "last"){
            for(let i = 0; i < Number(comand[2]); i++){
                coffeTypes.pop();
            }
        }
       }
 
    if(comand[0] == "Prefer"){
        if( Number(comand[1]) < coffeTypes.length && Number(comand[2]) < coffeTypes.length){
            let firsCof = coffeTypes[Number(comand[1])]
            let secCof = coffeTypes[Number(comand[2])]
            coffeTypes[Number(comand[1])] = secCof
            coffeTypes[Number(comand[2])] = firsCof
        }
       }
 
       if(comand[0]== "Reverse"){
        coffeTypes.reverse();
       }
       comandCount--;
       if(comandCount>=0){comand = input.shift().split(` `)}
 
    }
 
 
    console.log(`Coffees:`)
    console.log(coffeTypes.join(` `))
}