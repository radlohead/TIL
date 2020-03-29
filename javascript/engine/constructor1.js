var Book = function() {}
var result = Book === Book.prototype.constructor
console.log(1, result) // true

var obj = new Book()
console.log(2, Book === obj.constructor) // true

console.log(3, typeof Book) // function
console.log(4, typeof obj) // object
