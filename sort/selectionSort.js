const selectionSort = (A) => {
    let idx = 0
    let value = null

    for (let i = 0; i < A.length; ++i) {
        idx = i
        for (j = i; j < A.length; ++j) {
            if (i === j) value = A[j]
            if (value > A[j]) {
                idx = j
                value = A[j]
            }
            if (j === A.length - 1) {
                A[idx] = A[i]
                A[i] = value
            }
        }
    }
    return A
}
selectionSort([4, 5, 2, 1, 3]) // [ 1, 2, 3, 4, 5 ]
