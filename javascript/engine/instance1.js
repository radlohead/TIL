function Book(point) {
    this.point = point
}
Book.prototype.getPoint = function() {
    return this.point
}
const book = new Book(10)

// 위의 코드는 아래의 형태로 자바스크립트 엔진이 해석을 하게된다.

// Book 인스턴스: {
//     point: 10,
//     __proto__ = {
//         constructor: Book,
//         getPoint: function(){},
//         __proto__: Object
//     }
// }
