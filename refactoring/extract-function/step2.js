// 지역 변수를 사용할 때
function printBanner() {}
function printOwing(invoice) {
    printBanner()
    const outstanding = calculateOutstanding(invoice)
    recordDueDate(invoice)
    printDetails(invoice, outstanding)
}
function calculateOutstanding(invoice) {
    let outstanding = 0
    for (const o of invoice.orders) {
        outstanding += o.amount
    }
    return outstanding
}
function recordDueDate(invoice) {
    const today = new Date()
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    )
}
function printDetails(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`)
    console.log(`채무액: ${outstanding}`)
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
}
const invoice = {
    dueDate: 0,
    customer: 'sai',
    orders: [
        {
            amount: 100,
        },
    ],
}
printOwing(invoice)
