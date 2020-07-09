const sum = (A, K) => {
    if (!A.length) return K
    K += A.shift()
    return sum(A, K)
}
sum([1, 2, 3, 4, 5], 0) // 15

const sum2 = (N) => {
    if (!N) return 0
    return N + sum2(N - 1)
}
console.log(sum2(10)) // 55
