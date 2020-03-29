var book = {}
book.Point = function(point) {
    this.point = point
}
book.Point.prototype.getPoint = function() {
    console.log(this.point) // 100 - getPoint 호출을 new를 사용해서 생성한 다음 호출했기 때문에 this는 book을 가리키게 된다
}
var obj = new book.Point(100)
obj.getPoint()
