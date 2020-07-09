// 멱집합

const solution = (A, N) => {
    const result = []
    const recursion = (K) => {
        if (K > N) return
        const aClone = A.slice()
        result.push(aClone.splice(K, 1))
        result.push(aClone)
        recursion(K + 1)
    }
    recursion((K = 0))
    return result.filter((v) => v.length)
}
solution(['a', 'b', 'c'], 3)
// [
//     [ 'a' ],
//     [ 'b', 'c' ],
//     [ 'b' ],
//     [ 'a', 'c' ],
//     [ 'c' ],
//     [ 'a', 'b' ],
//     [ 'a', 'b', 'c' ]
// ]
