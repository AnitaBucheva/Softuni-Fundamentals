function orderTravelInfo(inputData) {
    let travelInfo = {};
    inputData.forEach(line => {
        let [country, city, price] = line.split(' > ');
        if (!travelInfo.hasOwnProperty(country)) {
            travelInfo[country] = {};
            travelInfo[country][city] = Number(price);
        } else {
            if (!travelInfo[country].hasOwnProperty(city)) {
                travelInfo[country][city] = Number(price);
            } else {
                let previousPrice = Number(travelInfo[country][city]);
                let newPrice = Math.min(previousPrice, price);
                travelInfo[country][city] = newPrice;
            }
        }
    })

    let sortedInfo = Object.entries(travelInfo).sort((a, b) => a[0].localeCompare(b[0]));
    sortedInfo.forEach(country => {
        let destinationResult = Object.entries(country[1]);
        destinationResult.sort((a, b) => a[1] - b[1]);
        let formatedDestinations = [];
        if (destinationResult.length > 1) {
            for (let array of destinationResult) {
                formatedDestinations.push(`${array[0]} -> ${array[1]}`);
            }
            destinationResult = formatedDestinations.join(' ');
        } else {
            destinationResult = destinationResult[0][0] + ' -> ' + destinationResult[0][1];
        }
        console.log(`${country[0]} -> ${destinationResult}`);
    })
}
orderTravelInfo([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
])