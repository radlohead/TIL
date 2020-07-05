let num: number = 1
const arr: number[] = [1, 2, 3]

const f = (n: number): number => {
    return n
}
f(num)

const code = `var str: string = 'sai'

function f2(arr: number[]): number[] {
    return arr
}`

const syntaxCompiler = (code) => {
    const OPEN_BRACKET = ['[', '{', '(']
    const CLOSE_BRACKET = [']', '}', ')']
    const bracketList = code
        .split('')
        .map((v) => v.match(/\[|\{|\(|\]|\}|\)/g))
        .filter((v) => v)
        .flat()
    const bracketCheck = () => {
        const bracketClone = bracketList.slice()
        const stack = []
        let rest = []
        bracketList.forEach((bracket, i, arr) => {
            stack.push(bracketClone.shift())
            rest = bracketList.slice().slice(i + 1)
            if (CLOSE_BRACKET.indexOf(stack[stack.length - 1][0]) > -1) {
                if (
                    CLOSE_BRACKET.indexOf(stack[stack.length - 1]) ===
                    OPEN_BRACKET.indexOf(stack[stack.length - 2])
                ) {
                    stack.splice(stack.length - 2, 2)
                }
            }
        })
        if (stack.length)
            throw new Error(`syntax Error ${stack[stack.length - 1]}`)
        else return true
    }
    bracketCheck()
}
const typeCompiler = () => {}
const generatorCompiler = () => {}

syntaxCompiler(code)
