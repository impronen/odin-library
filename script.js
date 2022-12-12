//Global variables

let myLibrary = [];

let newBookName = document.querySelector("#Book");
let newAuthor = document.querySelector("#Author");
let newGenre = document.querySelector("#Genre");
let newhaveRead = false;
let newUuID = crypto.randomUUID();

const addBookBtn = document.querySelector("#new-book-button");
const readCB = document.querySelector("#haveRead");

//Switches the value of whether book has been read
readCB.addEventListener('click', event => {
    newhaveRead = !newhaveRead;
})


//Constructor function

function book(uuid, author, name, genre, read) {
    this.uuid = uuid
    this.author = author
    this.name = name
    this.genre = genre  
    this.read = read
}

//Add book from form to the array
addBookBtn.addEventListener('click', (event) => {
    console.log(`New book is ${newBookName.value}`)
    console.log(`New author is ${newAuthor.value}`)
    console.log(`The genre is ${newGenre.value}`);
    console.log(newhaveRead)
   let newBook = new book (`${newUuID}`, `${newAuthor.value}`, `${newBookName.value}`, `${newGenre.value}`, `${newhaveRead}`);
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
    newCard.setAttribute("id", `${newUuID}`); // unique id to connect to array
    bookTable.appendChild(newCard);

    const cardLeft = document.createElement('div');
    cardLeft.classList.add('book-card-left');
    newCard.appendChild(cardLeft);

    const cardAuthor = document.createElement('div');
    cardAuthor.innerHTML = newAuthor.value;
    cardAuthor.classList.add('authorname')
    cardLeft.appendChild(cardAuthor);

    const cardName = document.createElement('h3');
    cardName.innerHTML = newBookName.value;
    cardName.classList.add('bookname')
    cardLeft.appendChild(cardName);

    const cardGenre = document.createElement('div');
    cardGenre.innerHTML = newGenre.value;
    cardGenre.classList.add('genre');
    cardLeft.appendChild(cardGenre);


    const cardRight = document.createElement('div');
    cardRight.classList.add('book-card-right');
    newCard.appendChild(cardRight);

    const btnHaveread = document.createElement('BUTTON');
    btnHaveread.classList.add('btnHaveread');
    btnHaveread.innerHTML = "Click Me";
    cardRight.appendChild(btnHaveread);

    const btnRemoveBook= document.createElement('BUTTON');
    btnRemoveBook.classList.add('btnRemove');
    btnRemoveBook.innerHTML = "Remove book";
    cardRight.appendChild(btnRemoveBook);

}

/* `${newUuID}`, `${newAuthor.value}`, `${newBookName.value}`, `${newGenre.value}`, `${newhaveRead}` */

//Library looper 

myLibrary.forEach(myLibrary => {
    for (let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`)
    }
})
