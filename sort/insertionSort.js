const insertionSort = (A) => {
    let idx = 0
    let value = null

    for (let i = 0; i < A.length; ++i) {
        idx = i
        value = A[i]

        for (let j = 0; j <= i; ++j) {
            if (value < A[j]) idx = idx > j ? j : idx
            if (value > A[j] && value < A[j + 1]) idx = j + 1
            if (i - 1 === j) {
                A.splice(i, 1)
                A.splice(idx, 0, value)
            }
        }
    }
    return A
}
insertionSort([2, 5, 3, 1, 4]) // [ 1, 2, 3, 4, 5 ]
insertionSort([4, 2, 5, 3, 1]) // [ 1, 2, 3, 4, 5 ]
