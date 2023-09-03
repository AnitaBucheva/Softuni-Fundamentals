function passwordValidator(password) {
    let digitCounter = 0;
    let isSymvol = false;

    for (let i = 0; i < password.length; i++) {
        let charNum = password[i].charCodeAt();
    
        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLeter = charNum >= 97 && charNum <= 122;
        let isBigLetter = charNum >= 65 && charNum <= 90;
    
        if (isDigit) {
            digitCounter++;
        }
        if (!isDigit && !isSmallLeter && !isBigLetter) {
            isSymvol = true;
        }
        }
        if (password.length < 6 || password.length > 10) {
            console.log("Password must be between 6 and 10 characters");
        }
        if (isSymvol) {
                console.log("Password must consist only of letters and digits");
        }
        if (digitCounter < 2) {
                console.log("Password must have at least 2 digits");
        }
         if (digitCounter >= 2 && !isSymvol && (password.length >= 6 || password.length >= 10)) {
                console.log("Password is valid");
         }
            
}
passwordValidator('logIn')