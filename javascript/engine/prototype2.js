function Book() {
    console.log(1, this.point) // undefined
}
Book.prototype.getPoint = function() {
    this.setPoint()
    console.log(2, this.point) // 100
}
Book.prototype.setPoint = function() {
    this.point = 100
}
var obj = new Book()
obj.getPoint()
