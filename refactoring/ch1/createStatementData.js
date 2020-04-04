class PerormanceCalculator {
    constructor(aPerformance, aPlay) {
        this.performances = aPerformance
        this.play = aPlay
    }
    get amount() {
        let result = 0

        switch (this.play.type) {
            case 'tragedy': //비극
                result = 40000
                if (this.performances.audience > 30) {
                    result += 1000 * (this.performances.audience - 30)
                }
                break
            case 'comedy': //희극
                result = 30000
                if (this.performances.audience > 20) {
                    result += 1000 + 500 * (this.performances.audience - 20)
                }
                break
            default:
                throw new Error(`알 수 없는 장르: ${this.play.type}`)
        }
        return result
    }
}

function createStatementData(invoice, plays) {
    const statementData = {}
    statementData.customer = invoice.customer
    statementData.performances = invoice.performances.map(enrichPerformance)
    statementData.totalAmount = totalAmount(statementData)
    statementData.totalVolumeCredits = totalVolumeCredits(statementData)
    return statementData

    function enrichPerformance(aPerformance) {
        const calculator = new PerormanceCalculator(
            aPerformance,
            playFor(aPerformance)
        )
        const result = Object.assign({}, aPerformance)
        result.play = calculator.play
        result.amount = amountFor(result)
        result.volumeCredits = volumeCreditsFor(result)
        return result
    }
    function playFor(aPerformance) {
        return plays[aPerformance.playID]
    }
    function amountFor(aPerformance) {
        return new PerormanceCalculator(aPerformance, playFor(aPerformance))
            .amount
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
