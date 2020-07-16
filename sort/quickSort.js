const quickSort = (arr, left = 0, right = arr.length - 1) => {
    const pivot = right
    const partition = recursion(arr, left, right, pivot)

    if (left < pivot - 1) quickSort(arr, left, partition - 1)
    if (pivot + 1 < right) quickSort(arr, partition, right)
    return arr

    function recursion(arr, left, right, pivot) {
        while (left <= right) {
            while (arr[left] < pivot) left++
            while (arr[right] > pivot) right--
            if (left <= right) {
                let swap = arr[left]
                arr[left] = arr[right]
                arr[right] = swap
                left++
                right--
            }
        }
        return left
    }
}
quickSort([6, 5, 3, 1, 8, 7, 2, 4]) //[1, 2, 3, 4,5, 6, 7, 8]
