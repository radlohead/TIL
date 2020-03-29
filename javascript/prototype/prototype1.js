function Book() {
    this.point = 100
}
Book.prototype.getPoint = function() {
    console.log(Object.is(this, Book.prototype)) // true, false
    return this.point
}
console.log(Book.prototype.getPoint()) // undefined
console.log(Book.prototype.getPoint.call(Book)) // undefined

// this의 point를 참조하려면 new 연산자로 인스턴스를 생성하고 호출해야 함
// 그 이유는 this.point를 참조하려면 prototype, __proto__에서 __proto__를 통해서 참조를 해야 하는데
//  new 연산자는 __proto__ 연결된 메소드를 호출하기 때문에 new 연산자를 사용해서 호출해야 한다
const obj = new Book()
console.log(obj.getPoint()) // 100
console.log(obj.getPoint.call(obj)) // 100
