function book(author, pages, haveRead) {
    this.author = author
    this.pages = pages
    this.haveRead = haveRead

    this.info = function() {
        return (`${author}, ${pages}, ${haveRead}`) //function inside the constructor function
    }
}


function Student(name, grade) {
  this.name = name
  this.grade = grade
  
}

Student.prototype.sayName = function() {
  console.log(this.name)
}
Student.prototype.goToProm = function() {
  console.log("Eh.. go to prom?")
}