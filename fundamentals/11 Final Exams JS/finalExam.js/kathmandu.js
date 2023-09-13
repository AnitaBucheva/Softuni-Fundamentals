function kathmandu(array) {

    let pattern = /^([!@#$?0-9A-Za-z]+)=(\d+)<<(.+)$/;
    let index = 0;

    while (array[index] !== 'Last note') {
        let isMatch = array[index].match(pattern);
        if (isMatch) {
            let codeLength = Number(isMatch[2]);
            let geohash = isMatch[3];
            if (codeLength === geohash.length) {
                let mountain = isMatch[1].replace(/[!@#$?]+/g, '');
                console.log(`Coordinates found! ${mountain} -> ${geohash}`);
            } else {
                console.log('Nothing found!');
            }
        } else {
            console.log('Nothing found!');
        }
        index++;
    }
}

kathmandu(["Ka?!#nch@@en@ju##nga@=3<<thfbghvn",
"=9Cho?@#Oyu<<thvb7ydht",
"Nan??ga#Par!ba!t?=16<<twm03q2rx5hpmyr6",
"Dhau??la#gi@ri?!#=3<<bvnfhrtiuy",
"Last note"]);