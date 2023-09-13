function city(object) {
    for (const key of Object.keys(object)) {
      console.log(`${key} -> ${object[key]}`);
    }
 }
 city({
   name: "Plovdiv",
   area: 389,
   population: 1162358,
   country: "Bulgaria",
   postCode: "4000",
 });