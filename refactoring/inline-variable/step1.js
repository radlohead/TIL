// 변수 인라인하기

// 변경 전
function fn() {
    let basePrice = anOrder.basePrice
    return basePrice > 1000
}

// 변경 후
function fn() {
    return anOrder.basePrice > 1000
}
