function melrahShake(input) {
    let mainString = input[0];
    let pattern = input[1];
    let count = 0;
    const regex = new RegExp(pattern, 'g');
    while (true) {
        const matches = mainString.match(regex);
        if (matches && matches.length >= 2) {
            count++;
            if (count === 2) {
                console.log("Shaked it.");
            }
            const firstIndex = mainString.indexOf(pattern);
            const lastIndex = mainString.lastIndexOf(pattern);
            mainString = mainString.slice(0, firstIndex) + mainString.slice(firstIndex + pattern.length);
            mainString = mainString.slice(0, lastIndex - pattern.length) + mainString.slice(lastIndex);
            pattern = pattern.slice(0, Math.floor(pattern.length / 2)) + pattern.slice(Math.floor(pattern.length / 2) + 1);
        } else {
            break;
        }
    }
    if (count >= 2) {
        console.log("Shaked it.");
    } else {
        console.log("No shake.");
    }
    console.log(mainString);
}