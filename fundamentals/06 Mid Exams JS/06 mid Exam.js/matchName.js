function matchName(text) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let names = text.match(pattern);
    console.log(names.join(' '));
}