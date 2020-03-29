function Book(title) {
    this.title = title
}
Book.prototype.getTitle = function() {
    return this.title
}
function Point(title) {
    Book.call(this, title) // call메소드를 이용해서 Book에 title 재할당
}
Point.prototype = Object.create(Book.prototype, {})
var obj = new Point('자바스크립트')
console.log(obj.getTitle()) // 자바스크립트
