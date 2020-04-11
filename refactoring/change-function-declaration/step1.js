// 변경 전
function circum(radius) {
    return 2 * Math.PI * radius
}

// 변경 1단계 - circum 내부로직 함수로 추출
function circumference(radius) {
    return 2 * Math.PI * radius
}
function circum(radius) {
    return circumference(radius)
}

// 변경 2단계 - circumference 함수 인라인화
function circumference(radius) {
    return 2 * Math.PI * radius
}
