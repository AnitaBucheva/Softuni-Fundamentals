function softUniReception(input) {
 
    let studentsCount = input[input.length - 1];
    let lastEmployeeEfficiencyPerHour = input.length - 2;
    let studentsPerHour = 0
 
    for (let i = 0; i <= lastEmployeeEfficiencyPerHour; i++){
        let currentEmployee = Number(input[i]);
        studentsPerHour += currentEmployee;
    }
 
    let timeNeeded = studentsCount / studentsPerHour; 
    console.log(`Time needed: ${Math.ceil(timeNeeded)}h.`);   
}
softUniReception(['5','6','4','20'])