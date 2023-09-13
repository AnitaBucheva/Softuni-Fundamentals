function vacation(people, type, day){
  
    let totalSum = 0;
    
switch (type) {
    case "Students":
        if(day === "Friday"){
            totalSum = 8.45 * people;
        }else if(day === "Saturday"){
            totalSum = 9.80 * people;
        }else if(day === "Sunday"){
            totalSum = 10.46 * people;
        }
        if(people >= 30){
         totalSum = totalSum * 0.85;
        }
        break;
    case "Business":
        if(people >= 100){
            people -= 10; 
         }
        if(day === "Friday"){
         totalSum = 10.90 * people;
        }else if(day === "Saturday"){
        totalSum = 15.60 * people;
        }else if(day === "Sunday"){
            totalSum = 16 * people;
        }
       
        break;
    case "Regular":
        if(day === "Friday"){
           totalSum = 15 * people;
        }else if(day === "Saturday"){
            totalSum = 20 * people;
        }else if(day === "Sunday"){
           totalSum = 22.50 * people;
        }
        if(people >= 10 && people <= 20){
           totalSum *= 0.95;
        }
        break;
}

console.log(`Total price: ${totalSum.toFixed(2)}`);
}
vacation(40,

    "Regular",
    
    "Saturday")