function messageDecripter(input){
    let num=input.shift();
    let pattern=/^([\$|%])(?<name>[A-Z][a-z]{3,})\1: [\[](?<num1>\d+)[\]][\|][\[](?<num2>\d+)[\]][\|][\[](?<num3>\d+)[\]][\|]$/g;
    for(let i=0; i<num;i++){
    let match=input[i].match(pattern);
        if(match===null){
           console.log(`Valid message not found!`);
        }else{
        let matches=input[i].matchAll(pattern);
    for(let match of matches){
       let n1=match.groups.num1;
       let n2=match.groups.num2;
       let n3=match.groups.num3;
       let word=(String.fromCharCode(n1,n2,n3));
       console.log(`${match.groups.name}: ${word} `);
    }
        }
    }
    }