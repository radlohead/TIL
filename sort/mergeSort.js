const mergeSort = (arr) => {
    if (arr.length < 2) return arr
    const pivot = Math.floor(arr.length / 2)
    const left = arr.slice(0, pivot)
    const right = arr.slice(pivot, arr.length)
    return merge(mergeSort(left), mergeSort(right))

    function merge(left, right) {
        const result = []
        while (left.length && right.length) {
            if (left[0] <= right[0]) {
                result.push(left.shift())
            } else {
                result.push(right.shift())
            }
        }
        while (left.length) result.push(left.shift())
        while (right.length) result.push(right.shift())
        return result
    }
}
mergeSort([6, 5, 3, 1, 8, 7, 2, 4]) // [1, 2, 3, 4, 5, 6, 7, 8]
mergeSort([2, 5, 3, 1, 4]) //[ 1, 2, 3, 4, 5 ]
