const myLibrary = [ ];

const addBookForm = document.getElementById("addBookForm");
const cardContainer = document.getElementById("cardContainer");

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

function displayBooks(bookArray) {
    bookArray.forEach(book => {
        
        const card = document.createElement('div');
        card.classList.add('card');

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = book.title;

        const cardContent = document.createElement('p');
        cardContent.textContent = "by " + book.author;

        cardContainer.appendChild(card);
        card.appendChild(cardTitle);
        card.appendChild(cardContent);
        

    });
}