//Global variables

let myLibrary = [];

let newBookName = document.querySelector("#Book");
let newAuthor = document.querySelector("#Author");
let newGenre = document.querySelector("#Genre");
let newhaveRead = false;
let newUuID = "";
let idSwap = "";

const addBookBtn = document.querySelector("#new-book-button");
const readCB = document.querySelector("#haveRead");




//Constructor function
/* function book(uuid, author, name, genre, read) {
    this.uuid = uuid
    this.author = author
    this.name = name
    this.genre = genre  
    this.read = read
} */

//Refactored to use class insted of regular constructor
class book {
    constructor(uuid, author, name, genre, read) {
        this.uuid = uuid
        this.author = author
        this.name = name
        this.genre = genre  
        this.read = read 
    }
}

let theHobbit = new book("53feeb9f-b87c-43b4-b54d-51441e01f4f3", "J.R.R. Tolkien", "The Hobbit", "Fantasy", true)
addBookToLibrary(theHobbit)

let bloodMeridian = new book("cc2e6e4c-6120-45b2-bb39-e44c6fdaf162", "Cormac McCarthy", "Blood Meridian or the Evening Redness in the West ", "Epic", true)
addBookToLibrary(bloodMeridian)

//Add book from form to the array
addBookBtn.addEventListener('click', (event) => {
   newUuID = crypto.randomUUID();
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
    newhaveRead = false;
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

    const cardName = document.createElement('h4');
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
    btnHaveread.setAttribute("id", `${newUuID}`);
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
    btnRemoveBook.setAttribute("id", `${newUuID}`);
    cardRight.appendChild(btnRemoveBook);
}


//Event listener for card buttons
document.body.addEventListener('click', function(event){
    let foo = event.target.id;
    idSwap = foo;
    foo = "";

    let targetID = myLibrary.find(item => item.uuid === idSwap);
    

    if(event.target.classList == 'btnHaveread'){
      event.target.classList.remove('btnHaveread')
      event.target.classList.add('btnNotread')
      targetID.read = false;
      event.target.innerHTML = "Not read"
      
    } else if (event.target.classList == 'btnNotread'){
        event.target.classList.remove('btnNotread')
        event.target.classList.add('btnHaveread')
        targetID.read = true;
        event.target.innerHTML = "Read"
        
    } else if (event.target.classList == 'btnRemove') {
        let dude = event.target.parentNode;
        let dudesMom = dude.parentNode;
        dudesMom.remove();
        myLibrary.splice(targetID, 1)
    }
    idSwap = "";
});


//Switches the value of whether book has been read (radio button)
readCB.addEventListener('click', event => {
    if (newhaveRead === true) {
        newhaveRead = false;
    } else {
        newhaveRead = true
    }
})


/* Possibility for improved function to generate book cards
const printCard = (book) => `
    <div>
        <div class="book-card-left">
            <div class="authorname">${book.author}</div>
            <h4 class="bookname">${book.name}</h4>
            <div class="genre">${book.genre}</div>
        </div>
    </div>
`
printCard({
    author: 'Jeppe',
    name: 'Testi nimi',
    genre:??'H??p??h??p??'
})

*/