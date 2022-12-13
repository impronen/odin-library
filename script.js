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
    newhaveRead = !newhaveRead;
    document.querySelector("#haveRead").checked = false;
}

//Subfunction to push a new book to array
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

//Creating book card in DOM

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
    console.log(newhaveRead)
    if (newhaveRead === false) {
        btnHaveread.classList.add("btnNotread");
        btnHaveread.innerHTML = "Not read"
    } else if (newhaveRead === true) {
        btnHaveread.classList.add("btnHaveread");
        btnHaveread.innerHTML = "Read"
    }
    cardRight.appendChild(btnHaveread);

    const btnRemoveBook= document.createElement('BUTTON');
    btnRemoveBook.classList.add('btnRemove');
    btnRemoveBook.innerHTML = "Remove book";
    cardRight.appendChild(btnRemoveBook);
}




/* 
Next up - build functions for buttons on cards
Link them with id from array objects and write / rewrite object and DOM
Linking should be it's own function
*/

//Connector function?
/* function connectToObject() {
    const 
    return myLibrary.newUuID === 
} */

//Event listener for remove button
document.body.addEventListener('click', function(event){
    if(event.target.classList == 'btnRemove'){
      console.log("Now?")
    };
}); 

//Delete element function
/* function elementRemover() {
    if(target.id){

    }

Build this so that the function traverses up the DOM tree to
book-card element and then deletes it + children

} */

/* `${newUuID}`, `${newAuthor.value}`, `${newBookName.value}`, `${newGenre.value}`, `${newhaveRead}` */

//Library looper 

myLibrary.forEach(myLibrary => {
    for (let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`)
    }
})
