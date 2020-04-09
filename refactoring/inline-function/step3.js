// 변경 전
function reportLines(aCustomer) {
    const lines = []
    gatherCustomerData(lines, aCustomer)
    return lines
}
function gatherCustomerData(out, aCustomer) {
    out.push(['name', aCustomer.name])
    out.push(['location', aCustomer.location])
}

// 변경 후
// gatherCustomerData 함수에서 하던 역할을 reportLines에서 처리하도록 수정
function reportLines(aCustomer) {
    const lines = []
    lines.push(['name', aCustomer.name])
    lines.push(['location', aCustomer.location])
    gatherCustomerData(lines, aCustomer)
    return lines
}
