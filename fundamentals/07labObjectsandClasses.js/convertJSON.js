function convertJSON(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    return JSON.stringify(person);
}
convertJSON("George", "Jones", "Brown");
convertJSON("Peter", "Smith", "Blond");


console.log(convertJSON("George", "Jones", "Brown"));