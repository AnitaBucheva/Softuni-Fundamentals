function flightSchedule(inputArrayOfArrays) {
    let destinations = inputArrayOfArrays[0];
    let destinationsObject = {};
    destinations.forEach(el => {
        let destination = el.split(' ')
        if (destination.length > 2) {
            destination[1] += ` ${destination[2]}`;
            destination.pop();
        }
        destinationsObject[destination[0]] = destination[1];
    })
    
    let cancelledFlights = [];
    
    inputArrayOfArrays[1].forEach(el => {
        let destination = el.split(' ');
        let flightCode = destination[0];
        if (destinationsObject.hasOwnProperty(flightCode)) {
            cancelledFlights.push(destinationsObject[flightCode]);
            delete destinationsObject[flightCode]
        } 
    })

    let availableDestinations = Object.values(destinationsObject);
    cancelledFlights.sort((a, b) => a.localeCompare(b));
  
    if (inputArrayOfArrays[2][0] === 'Cancelled') {
        for (const destination of cancelledFlights) {
            console.log(`{ Destination: '${destination}', Status: 'Cancelled' }`)
        }
    } else {
        for (const destination of availableDestinations) {
            console.log(`{ Destination: '${destination}', Status: 'Ready to fly' }`)
        }
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
);