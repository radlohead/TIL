function getTitle() {
    console.log('HTML책')
}
var book = function() {
    function getTitle() {
        console.log('JS책')
    }
    this.getTitle() // HTML책 - this가 window를 가리키기 때문이다. 그 이유는 book을 함수형태로 전역에서 호출하기 때문에 this는 window이다
    getTitle() // JS책 - 바깥에 getTitle보다 내부에 getTitle이 나중에 호출되므로 JS책이 출력된다
}
book()
