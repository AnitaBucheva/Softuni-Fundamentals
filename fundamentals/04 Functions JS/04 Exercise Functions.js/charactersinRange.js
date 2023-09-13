function charactersinRange(firstChar, secondChar){
    
let rangeStart = Math.min(firstChar.charCodeAt(),secondChar.charCodeAt());
let rangeEnd = Math.max(firstChar.charCodeAt(),secondChar.charCodeAt());
let resultStrig = "";

for (let curentChar = rangeStart + 1; curentChar < rangeEnd; curentChar++) {
let singleChar = String.fromCharCode(curentChar);
resultStrig += `${singleChar} `;
   
}
console.log(resultStrig);
}
charactersinRange('#',':');