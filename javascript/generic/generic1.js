// generic이란?
// copyWithin()이 Array메소드이므로 Array오브젝트가 처리 대상이지만
// Generic은 Array오브젝트가 아닌 Array-like, 이터러블 오브젝트를 처리할 수 있다는 것을 뜻한다.
const like = { 0: 10, 1: 20, length: 2 }
console.log(Array.prototype.copyWithin.call(like, 1, 0)) // { '0': 10, '1': 10, length: 2 }
