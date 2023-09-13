function employeesInfo(inputArray) {
    class Employee {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
    }

    for (const name of inputArray) {
        let employee = new Employee(name, name.length);
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNumber}`);
    }
}
employeesInfo([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
employeesInfo(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);