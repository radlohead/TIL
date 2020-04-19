// 여러 함수를 변환 함수로 묶기

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
// 클라이언트 1
const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const baseCharge = aReading.baseCharge

// 클라이언트 2
const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const taxableCharge = aReading.taxableCharge

// 클라이언트 3
const rawReading = acquireReading()
const aReading = enrichReading(rawReading)
const basicChargeAmount = aReading.baseCharge

function enrichReading(original) {
    const result = JSON.parse(JSON.stringify(original))
    result.baseCharge = calculateBaseCharge(result)
    result.taxableCharge = Math.max(
        0,
        result.baseCharge - taxThreshold(result.year)
    )
    return result
}
function calculateBaseCharge(aReading) {
    return baseRate(aReading.month, aReading.year) * aReading.quantity
}
