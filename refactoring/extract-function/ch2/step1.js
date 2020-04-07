// 지역 변수를 사용할 때
function printBanner() {}
function printOwing(invoice) {
    let outstanding = 0

    printBanner()

    // 미해결 채무(outstanding)를 계산한다.
    for (const o of invoice.orders) {
        outstanding += o.amount
    }

    const today = new Date()
    invoice.dueDate = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() + 30
    )

    // 세부 사항을 출력한다.
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
