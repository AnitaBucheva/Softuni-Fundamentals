function convertJSON(data) {
    let jsonAsObject = JSON.parse(data);
    
    for (const key of Object.keys(jsonAsObject)) {
        console.log(`${key}: ${jsonAsObject[key]}`);
    }
}
convertJSON('{"name": "George", "age": 40, "town": "Sofia"}');
convertJSON('{"name": "Peter", "age": 35, "town": "Plovdiv"}');