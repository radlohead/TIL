const invoicesJSON = require('./invoices.json')
const playsJSON = require('./plays.json')

function renderPlainText(data, plays) {
    let result = `청구 내역 (고객명: ${data.customer})\n`

    for (let perf of data.performances) {
        // 청구 내역을 출력한다.
        result += `${perf.play.name}: ${usd(amountFor(perf))} (${
            perf.audience
        }석)\n`
    }
    result += `총액: ${usd(totalAmount())}\n`
    result += `적립 포인트: ${totalVolumeCredits()}점\n`
    console.log(result)
    return result

    function usd(aNumber) {
        return new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(aNumber / 100)
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
    function totalVolumeCredits() {
        let volumeCredits = 0
        for (let perf of data.performances) {
            volumeCredits += volumeCreditsFor(perf)
        }
        return volumeCredits
    }
    function totalAmount() {
        let totalAmount = 0
        for (let perf of data.performances) {
            totalAmount += amountFor(perf)
        }
        return totalAmount
    }
}
const statement = (invoice, plays) => {
    const statementData = {}
    statementData.customer = invoice.customer
    statementData.performances = invoice.performances.map(enrichPerformance)
    return renderPlainText(statementData, plays)

    function enrichPerformance(aPerformance) {
        const result = Object.assign({}, aPerformance)
        result.play = playFor(result)
        return result
    }
    function playFor(aPerformance) {
        return plays[aPerformance.playID]
    }
}
statement(invoicesJSON[0], playsJSON)
