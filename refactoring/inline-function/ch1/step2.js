// 변경 전
function rating(driver) {
    return moreThanFiveLateDeliveries(driver) ? 2 : 1
}
function moreThanFiveLateDeliveries(dvr) {
    return dvr.driver.numberOfLateDeliveries > 5
}

// 변경 후
// moreThanFiveLateDeliveries 함수를 인라인화 했다.
function rating(aDriver) {
    return aDriver.numberOfLateDeliveries > 5 ? 2 : 1
}
