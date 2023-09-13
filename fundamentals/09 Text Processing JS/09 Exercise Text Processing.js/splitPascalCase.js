function splitPascalCase(word) {
    console.log(word.split(/(?=[A-Z])/).join(', '));
}
splitPascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan')