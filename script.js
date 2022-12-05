//Global variables

let myLibrary = [];


function book(author, pages, haveRead) {
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

    this.pushToLibrary  = function() {
        myLibrary.push(this);
    }
    
    this.pushToLibrary();

    this.info = function() {
        return (`${author}, ${pages}, ${haveRead}`)
    }
    
}




//Library looper 


myLibrary.forEach(myLibrary => {
    for (let key in myLibrary) {
        console.log(`${key}: ${myLibrary[key]}`)
    }
})

//

// let TheHobbit = new book ('JRR Tolkien', '256','Not read');
// let LOTR = new book ('JRR Tolkien', '1056','Not read');