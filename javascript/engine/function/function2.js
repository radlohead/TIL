// 함수 선언문 + 선언문은 마지막에 선언된 함수가 이전함수의 값을 제거하고 새로 등록한다
function book() {
    function getBook() {
        return '책1'
    }

    console.log(getBook()) // 책2
    function getBook() {
        return '책2'
    }
}
book()

// 함수 표현식 + 표현식
function book2() {
    var getBook = function() {
        return '책1'
    }

    console.log(getBook()) // 책1
    var getBook = function() {
        return '책2'
    }
}
book2()

// 함수 선언문 + 표현식
function book3() {
    function getBook() {
        return '책1'
    }

    console.log(getBook()) // 책1
    var getBook = function() {
        return '책2'
    }
}
book3()

// 함수 표현식 + 선언문
function book4() {
    var getBook = function() {
        return '책1'
    }

    console.log(getBook()) // 책1
    function getBook() {
        return '책2'
    }
}
book4()
