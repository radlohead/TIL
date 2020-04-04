function createStatementData(invoice, plays) {
    const statementData = {}
    statementData.customer = invoice.customer
    statementData.performances = invoice.performances.map(enrichPerformance)
    statementData.totalAmount = totalAmount(statementData)
    statementData.totalVolumeCredits = totalVolumeCredits(statementData)
    return statementData

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

module.exports = {
    createStatementData
}
