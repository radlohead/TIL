const invoicesJSON = require('./invoices.json')
const playsJSON = require('./plays.json')

const statement = (invoice, plays) => {
    let totalAmount = 0
    let volumeCredits = 0
    let result = `청구 내역 (고객명: ${invoice.customer})\n`

    function format(aNumber) {
        return new Intl.NumberFormat('en-us', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2
        }).format(aNumber)
    }
    function playFor(aperformance) {
        return plays[aperformance.playID]
    }
    function amountFor(aperformance) {
        let result = 0

        switch (playFor(aperformance).type) {
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
                throw new Error(
                    `알 수 없는 장르: ${playFor(aperformance).type}`
                )
        }
        return result
    }
    function volumeCreditsFor(aperformance) {
        let volumeCredits = 0
        volumeCredits += Math.max(aperformance.audience - 30, 0)
        if ('comedy' === playFor(aperformance).type) {
            volumeCredits += Math.floor(aperformance.audience / 5)
        }
        return volumeCredits
    }

    for (let perf of invoice.performances) {
        volumeCredits += volumeCreditsFor(perf)

        // 청구 내역을 출력한다.
        result += `${playFor(perf).name}: ${format(amountFor(perf) / 100)} (${
            perf.audience
        }석)\n`
        totalAmount += amountFor(perf)
    }
    result += `총액: ${format(totalAmount / 100)}\n`
    result += `적립 포인트: ${volumeCredits}점\n`
    console.log(result)
    return result
}
statement(invoicesJSON[0], playsJSON)
