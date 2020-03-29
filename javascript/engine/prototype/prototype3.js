function Book(point) {
    this.point = point
}
Book.prototype.getPoint = function() {
    return this.point
}
var obj = new Book(100)
console.log(obj.getPoint()) // 100

console.log(Book.prototype.getPoint()) // undefined  - new로 생성하지 않았기 때문에 __proto__를 바라보지 않고 있어서 point를 찾을수 없다
