function schoolLibrary(input) {
    let books = input.shift().split("&");
    let comands = input.shift();
    while (comands !== "Done") {
        let com = comands.split(" | ");
        let actions = com[0];
        let bookName = com[1];
        let bookName2 = com[2];


        switch (actions) {
            case "Add Book":
                if (!books.includes(bookName)) {
                    books.unshift(bookName);
                }
                break;
            case "Take Book":
                let index = books.indexOf(bookName);
                if (index !== -1) {
                    books.splice(index, 1);
                }
                break;

            case "Swap Books":
                let index1 = books.indexOf(bookName);
                let index2 = books.indexOf(bookName2);
                if (index1 !== -1 && index2 !== -1) {
                    [books[index1], books[index2]] = [books[index2], books[index1]];
                }
                break;
            case "Insert Book":
                books.push(bookName);
                break;
            case "Check Book":
                if (bookName >= 0 && bookName < books.length) {
                    console.log(books[bookName]);
                }
                break;
        }
        comands = input.shift();
    }

    console.log(books.join(', '));
}
schoolLibrary(["Don Quixote&The Great Gatsby&Moby Dick&Hamlet",
    "Add Book | The Odyssey",
    "Take Book | Don Quixote",
    "Insert Book | Alice's Adventures in Wonderland",
    "Check Book | 3",
    "Done"
])