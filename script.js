//Global variables

let myLibrary = [];

let newBookName = document.querySelector("#Book");
let newAuthor = document.querySelector("#Author");
let newGenre = document.querySelector("#Genre");


const addBookBtn = document.querySelector("#new-book");


//Constructor function

function book(author, name, genre) {
    this.author = author
    this.name = name
    this.genre = genre

/*     this.info = function() {
        return (`${author}, ${pages}, ${haveRead}`)
    } */
    
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

   let newBook = new book (`${newAuthor.value}`, `${newBookName.value}`, `${newGenre.value}`);
   addBookToLibrary(newBook)
})

//Library looper 

myLibrary.forEach(myLibrary => {
    for (let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`)
    }
})



let TheHobbit = new book ('JRR Tolkien', '256','Not read');
let LOTR = new book ('JRR Tolkien', '1056','Not read');