// 변경 전
function getRating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1
}
function moreThanFiveLateDeliveries(driver) {
    return driver.numberOfLateDeliveries > 5
}

// 변경 후
// moreThanFiveLateDeliveries 함수를 인라인화 했다.
function getRating(driver) {
    return driver.numberOfLateDeliveries > 5 ? 2 : 1
}
