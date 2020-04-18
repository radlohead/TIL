// 여러 함수를 클래스로 묶기

// 변경 전
// 클라이언트 1
const aReading = acquireReading()
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity

// 클라이언트 2
const aReading = acquireReading()
const base = baseRate(aReading.month, aReading.year) * aReading.quantity
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))

// 클라이언트 3
const aReading = acquireReading()
const basicChargeAmount = calculateBaseCharge(aReading)

function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity
}

// 변경 후
class Reading {
    constructor(data) {
        this._customer = data.customer
        this._quantity = data.quantity
        this._month = data.month
        this._year = data.year
    }
    get customer() {
        return this._customer
    }
    get quantity() {
        return this._quantity
    }
    get month() {
        return this._month
    }
    get year() {
        return this._year
    }
    get baseCharge() {
        return baseRate(this.month, this.year) * this.quantity
    }
    get taxableChargeFn() {
        return Math.max(0, this.baseCharge - taxThreshold(this.year))
    }
}

// 클라이언트 1
const rawReading = acquireReading()
const aReading = new Reading(rawReading)
const basicChargeAmount = aReading.baseCharge

// 클라이언트 2
const rawReading = acquireReading()
const aReading = new Reading(rawReading)
const taxableCharge = aReading.taxableChargeFn

// 클라이언트 3
const rawReading = acquireReading()
const aReading = new Reading(rawReading)
const basicChargeAmount = aReading.baseCharge
