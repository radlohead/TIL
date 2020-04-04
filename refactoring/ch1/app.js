const invoicesJSON = require('./invoices.json')
const playsJSON = require('./plays.json')

function renderPlainText(data, plays) {
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

    function usd(aNumber) {
        return new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(aNumber / 100)
    }
}
const statement = (invoice, plays) => {
    const statementData = {}
    statementData.customer = invoice.customer
    statementData.performances = invoice.performances.map(enrichPerformance)
    statementData.totalAmount = totalAmount(statementData)
    statementData.totalVolumeCredits = totalVolumeCredits(statementData)
    return renderPlainText(statementData, plays)

    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance)
        result.play = playFor(result)
        result.amount = amountFor(result)
        result.volumeCredits = volumeCreditsFor(result)
        return result
    }
    function playFor(aPerformance) {
        return plays[aPerformance.playID]
    }
    function amountFor(aperformance) {
        let result = 0

        switch (aperformance.play.type) {
            case 'tragedy': //비극
                result = 40000
                if (aperformance.audience > 30) {
                    result += 1000 * (aperformance.audience - 30)
                }
                break
            case 'comedy': //희극
                result = 30000
                if (aperformance.audience > 20) {
                    result += 1000 + 500 * (aperformance.audience - 20)
                }
                break
            default:
                throw new Error(`알 수 없는 장르: ${aperformance.play.type}`)
        }
        return result
    }
    function volumeCreditsFor(aperformance) {
        let volumeCredits = 0
        volumeCredits += Math.max(aperformance.audience - 30, 0)
        if ('comedy' === aperformance.play.type) {
            volumeCredits += Math.floor(aperformance.audience / 5)
        }
        return volumeCredits
    }
    function totalAmount(data) {
        return data.performances.reduce((total, p) => total + p.amount, 0)
    }
    function totalVolumeCredits(data) {
        return data.performances.reduce(
            (total, p) => total + p.volumeCredits,
            0
        )
    }
}
statement(invoicesJSON[0], playsJSON)

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
