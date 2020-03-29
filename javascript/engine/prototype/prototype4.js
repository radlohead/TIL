function Book(point) {
    this.point = point
}
Book.prototype.getPoint = function() {
    return 100
}
var obj = new Book(200)

obj.getPoint = function() {
    return this.point
}
console.log(obj.getPoint()) // 200

// prototype.getPoint는 __proto__ 내부에 생성되고 obj.getPoint는 그 위에 생성되므로
// 가장 앞에 있는 getPoint가 호출되므로 prototype.getPoint에서 100을 리턴해도 이것을 읽지 않고 200이 호출된다

// obj 인스턴스 = {
//     getPoint: function(){return this.point},
//     __proto__: {
//         getPoint: function(){return 100;}
//     }
// }
