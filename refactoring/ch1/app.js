const invoicesJSON = require('./invoices.json')
const playsJSON = require('./plays.json')
const { createStatementData } = require('./createStatementData.js')

function usd(aNumber) {
    return new Intl.NumberFormat('en-us', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    }).format(aNumber / 100)
}
function renderPlainText(data) {
    let result = `청구 내역 (고객명: ${data.customer})\n`

    for (let perf of data.performances) {
        // 청구 내역을 출력한다.
        result += `${perf.play.name}: ${usd(perf.amount)} (${
            perf.audience
        }석)\n`
    }
    result += `총액: ${usd(data.totalAmount)}\n`
    result += `적립 포인트: ${data.totalVolumeCredits}점\n`
    // console.log(result)
    return result
}
function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays))
}
function htmlStatement(invoice, plays) {
    return renderHTML(createStatementData(invoice, plays))
}
function renderHTML(data) {
    let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`
    result += `<table>
        <tr>
            <th>연극</th>
            <th>좌석 수</th>
            <th>금액</th>
        </tr>
    `
    for (let perf of data.performances) {
        result += `
            <tr>
                <td>${perf.play.name}</td>
                <td>${perf.audience}</td>
                <td>${usd(perf.amount)}</td>
            </tr>\n
        `
    }
    result += `
        </table>\n
        <p>총액: <em>${usd(data.totalAmount)}</em></p>\n
        <p>적립 포인트: <em>${data.totalVolumeCredits}</em>점</p>\n
    `
    return result
}
statement(invoicesJSON[0], playsJSON)
console.log(htmlStatement(invoicesJSON[0], playsJSON))

function test() {
    const t1 =
        statement(invoicesJSON[0], playsJSON).indexOf(
            `청구 내역 (고객명: BigCo)`
        ) > -1
    const t2 =
        statement(invoicesJSON[0], playsJSON).indexOf(
            `Hamlet: $650.00 (55석)`
        ) > -1
    const t3 =
        statement(invoicesJSON[0], playsJSON).indexOf(
            `As You Like It: $385.00 (35석)`
        ) > -1
    const t4 =
        statement(invoicesJSON[0], playsJSON).indexOf(
            `Othello: $500.00 (40석)`
        ) > -1
    const t5 =
        statement(invoicesJSON[0], playsJSON).indexOf(`총액: $1,535.00`) > -1
    const t6 =
        statement(invoicesJSON[0], playsJSON).indexOf(`적립 포인트: 47점`) > -1
    return [t1, t2, t3, t4, t5, t6].every(state => state)
}
console.log(test())
