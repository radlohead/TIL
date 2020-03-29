// 이미 book이 선언되어 있기 때문에 아래에서 함수 표현식으로 값을 변경해도 변경되지 않는다
var result = book()
console.log(result) // 호이스팅

function book() {
    return '호이스팅'
}
book = function() {
    return '함수 표현식'
}
