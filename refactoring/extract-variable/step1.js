// 변경 전
function fn() {
    return (
        order.quantity * order.itemPrice -
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
        Math.min(order.quantity * order.itemPrice * 0.1, 100)
    )
}

// 변경 후
// 변수 추출하기
function fn() {
    const basePrice = order.quantity * order.itemPrice
    const quantityDiscount =
        Math.max(0, order.quantity - 500) * order.itemPrice * 0.05
    const shipping = Math.min(basePrice * 0.1, 100)
    return basePrice - quantityDiscount + shipping
}
