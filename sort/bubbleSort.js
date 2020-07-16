const bubbleSort = (A) => {
    let targetIndex = A.length

    for (let i = 0; i < A.length; ++i) {
        --targetIndex
        for (let j = 0; j < targetIndex; ++j) {
            if (A[j] > A[j + 1]) {
                const temp = A[j]
                A[j] = A[j + 1]
                A[j + 1] = temp
            }
        }
    }
    return A
}
bubbleSort([3, 5, 1, 2, 4]) // [ 1, 2, 3, 4, 5 ]
bubbleSort([4, 2, 5, 3, 1]) // [ 1, 2, 3, 4, 5 ]
