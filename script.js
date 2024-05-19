const myLibrary = [ ];

const addBookForm = document.getElementById("addBookForm");


function Book(title, author) {
    //my constructor
    this.title = title;
    this.author = author;
}

function addBookToLibrary() {

    let newBookTitle = document.getElementById("book_title");
    let newBookAuthor = document.getElementById("book_author");

    let newBook = new Book(newBookTitle.value, newBookAuthor.value)

    myLibrary.push(newBook);

    newBookTitle.value = "";
    newBookAuthor.value = "";
}