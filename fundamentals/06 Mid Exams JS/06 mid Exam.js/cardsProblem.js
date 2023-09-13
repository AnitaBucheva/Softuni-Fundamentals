function CardsProblem(arr) {
 
    let OurDeck = arr.shift();
    OurDeck = OurDeck.split(", ");
 
    let n = Number(arr.shift());
 
    for (let i = 0; i < n; i++) {
        let command = arr[i].split(", ");
        let action = command[0];
 
        if (action === "Add") {
            let cardToAdd = command[1];
 
            if (OurDeck.includes(cardToAdd) === false) {
                OurDeck.push(cardToAdd);
                console.log(`Card successfully added`);
            } else {
                console.log(`Card is already in the deck`);
            }
        } else if (action === "Remove") {
            let cardToRemove = command[1];
 
            if (OurDeck.includes(cardToRemove) === false) {
                console.log(`Card not found`);
            } else {
                let indexCard = OurDeck.indexOf(cardToRemove);
                OurDeck.splice(indexCard, 1);
                console.log(`Card successfully removed`);
            }
        } else if (action === "Remove At") {
            let removeAtIndex = Number(command[1]);
            if ( removeAtIndex >=0 && removeAtIndex < OurDeck.length) {
                OurDeck.splice(removeAtIndex,1);
                console.log(`Card successfully removed`);
            } else {
                console.log(`Index out of range`);
            }
        } else if (action === "Insert") {
            let indexCard = Number(command[1]);
            let cardToAdd = command[2];
 
            if ( indexCard >=0 && indexCard < OurDeck.length) {
                if ( OurDeck.includes(cardToAdd)) {
                    console.log(`Card is already added`);
                } else {
                    OurDeck.splice(indexCard,0,cardToAdd);
                    console.log(`Card successfully added`);
                }
 
            } else {
                console.log(`Index out of range`);
            }
        }
    }
    console.log(OurDeck.join(", "))
}
 
CardsProblem(["Jack of Spades, Ace of Clubs, Jack of Clubs",
"2",
"Insert, -1, Queen of Spades",
"Remove At, 1"])