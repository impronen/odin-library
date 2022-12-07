//Global variables

let myLibrary = [];

let newBookName = document.querySelector("#Book");
let newAuthor = document.querySelector("#Author");
let newGenre = document.querySelector("#Genre");
let newhaveRead = false;

const addBookBtn = document.querySelector("#new-book");
const readCB = document.querySelector("#haveRead");

//Switches the value of whether book has been read
readCB.addEventListener('click', event => {
    newhaveRead = true
})


//Constructor function

function book(author, name, genre, read) {
    this.author = author
    this.name = name
    this.genre = genre  
    this.read = read
}

//Subfunction to push a new book to array
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

//Add book from form to the array
addBookBtn.addEventListener('click', (event) => {
    console.log(`New book is ${newBookName.value}`)
    console.log(`New author is ${newAuthor.value}`)
    console.log(`The genre is ${newGenre.value}`);
    console.log(newhaveRead.value)
   let newBook = new book (`${newAuthor.value}`, `${newBookName.value}`, `${newGenre.value}`, `${newhaveRead}`);
   addBookToLibrary(newBook)
})


//Pseudocode for creating a book card

/* 
INSIDE addBookToLibrary()
CREATE new HTML elements for the card, inside book-cards div
Connect this element to the object created (use objects array index)
Populate div's with values from pairs
*/

//Library looper 

myLibrary.forEach(myLibrary => {
    for (let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`)
    }
})
