//Global variables

let myLibrary = [];



function book(author, pages, haveRead) {
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

    this.info = function() {
        return (`${author}, ${pages}, ${haveRead}`) //function inside the constructor function
    }
}
