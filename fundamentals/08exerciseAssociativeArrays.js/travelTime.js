function travelTime(arr) {
 
    let travelData = {};
    for (let i = 0; i < arr.length; i++) {
       let [country, town, cost] = arr[i].split(' > ');
       if (!travelData.hasOwnProperty(country)) {
           travelData[country] = {};
        //    travelData[country][town] = Number(cost);
       }
       // add first condition in else if and replace it with if
       if(!travelData[country].hasOwnProperty(town) ||
       travelData[country].hasOwnProperty(town) &&
        travelData[country][town] > Number(cost)){
           travelData[country][town] = Number(cost);
       }
    //    else {
    //        travelData[country][town] = Number(cost);
    //    }
    }
    let result = [];
    let sortedCountries = Object.keys(travelData).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    for (let country of sortedCountries) {
        let sortedTowns =  Object.keys(travelData[country]).sort((a, b) => travelData[country][a] - travelData[country][b]);
        result.push(country + ' ->');
        for (let town of sortedTowns) {
            result.push(town + ' -> ' + travelData[country][town]);
        }
        console.log(result.join(' '));
        result = [];
    }
}
travelTime([

    "Bulgaria > Sofia > 500",
    
    "Bulgaria > Sopot > 800",
    
    "France > Paris > 2000",
    
    "Albania > Tirana > 1000",
    
    "Bulgaria > Sofia > 200"
    
    ])