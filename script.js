//Global variables

let myLibrary = [];

let newBookName = document.querySelector("#Book");
let newAuthor = document.querySelector("#Author");
let newGenre = document.querySelector("#Genre");
let newhaveRead = false;
let newUuID = crypto.randomUUID();

const addBookBtn = document.querySelector("#new-book");
const readCB = document.querySelector("#haveRead");

//Switches the value of whether book has been read
readCB.addEventListener('click', event => {
    newhaveRead = true
})


//Constructor function

function book(author, name, genre, read, uuid) {
    this.author = author
    this.name = name
    this.genre = genre  
    this.read = read
    this.uuid = uuid
}

//Add book from form to the array
addBookBtn.addEventListener('click', (event) => {
    console.log(`New book is ${newBookName.value}`)
    console.log(`New author is ${newAuthor.value}`)
    console.log(`The genre is ${newGenre.value}`);
    console.log(newhaveRead)
   let newBook = new book (`${newAuthor.value}`, `${newBookName.value}`, `${newGenre.value}`, `${newhaveRead}`, `${newUuID}`);
   addBookToLibrary(newBook)
   createBookCard ()
   inputClear()
})


//Clear input values

function inputClear() {
    document.querySelector("#Book").value = '';
    document.querySelector("#Author").value = '';
    document.querySelector("#Genre").value = '';
}

//Subfunction to push a new book to array
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

//Pseudocode for creating a book card

/* 
INSIDE addBookToLibrary()
CREATE new HTML elements for the card, inside book-cards div
Connect this element to the object created (use objects array index)
Populate div's with values from pairs
*/


function createBookCard () {
    const bookTable = document.querySelector('.book-cards')
    const newCard = document.createElement('div');
    newCard.classList.add('book-card');
    /* newCard.textContent = "Just some text"; */
    bookTable.appendChild(newCard);

    const cardLeft = document.createElement('div');
    cardLeft.classList.add('book-card-left');
    cardLeft.textContent = `Author: ${newAuthor.value}`;
    newCard.appendChild(cardLeft);

    const cardRight = document.createElement('div');
    cardRight.classList.add('book-card-right');
    cardRight.textContent = `${newBookName.value}`;
    newCard.appendChild(cardRight);

}




//Library looper 

myLibrary.forEach(myLibrary => {
    for (let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`)
    }
})
