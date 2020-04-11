// 매개변수를 속성으로 바꾸기

// 변경 전
function inNewEngland(aCustomer) {
    return ['MA', 'CT', 'ME', 'VI', 'NH', 'RI'].includes(
        aCustomer.address.state
    )
}

// 변경 step1
// 내부 로직을 변수로 생성
function inNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state
    return ['MA', 'CT', 'ME', 'VI', 'NH', 'RI'].includes(stateCode)
}

// 변경 step2
// 내부 로직을 함수로 생성
function inNewEngland(aCustomer) {
    const stateCode = aCustomer.address.state
    xxNEWinNewEngland(stateCode)
}
function xxNEWinNewEngland(stateCode) {
    return ['MA', 'CT', 'ME', 'VI', 'NH', 'RI'].includes(stateCode)
}

// 변경 step3
// 내부 변수 인라인하기
function inNewEngland(aCustomer) {
    xxNEWinNewEngland(aCustomer.address.state)
}
function xxNEWinNewEngland(stateCode) {
    return ['MA', 'CT', 'ME', 'VI', 'NH', 'RI'].includes(stateCode)
}
const newEnglanders = someCustomers.filter((c) =>
    xxNEWinNewEngland(c.address.state)
)

// 변경 step4
// 새 함수의 이름을 기존 함수의 이름으로 변경
// 기존 함수 로직 수정
function inNewEngland(stateCode) {
    return ['MA', 'CT', 'ME', 'VI', 'NH', 'RI'].includes(stateCode)
}
const newEnglanders = someCustomers.filter((c) => inNewEngland(c.address.state))
