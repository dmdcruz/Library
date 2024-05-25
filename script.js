const myLibrary = [ ];

let myObject = { title: "John", author: "25" }; // create an object

myLibrary.push(myObject); 

const addBookForm = document.getElementById("addBookForm");
const cardContainer = document.getElementById("cardContainer");
const newBookBtn = document.getElementById("newBookBtn");
const dialog = document.querySelector("dialog");
const addBookDialogBtn = document.getElementById("addBookBtn");

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
    cardContainer.innerHTML = "";
    
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

// "NEW BOOK" button opens the dialog form modally
newBookBtn.addEventListener("click", function(event) {
    event.preventDefault();
    dialog.showModal();
});

addBookDialogBtn.addEventListener("click", () => {
    addBookToLibrary();
    displayBooks(myLibrary);
});

displayBooks(myLibrary);