let num: number = 1
const arr: number[] = [1, 2, 3]

const f = (n: number): number => {
    return n
}
f(num)

const code = `var str: string = 'sai'
let num: number = 1
const arr: number[] = [1, 2, 3]
const obj: Object = {name: 'sai'}
const isBoolean: boolean = false
const isNull: null = null
const isUndefined: undefined = undefined

function f2(arr: number[]): number[] {
    return arr
}
`

const syntaxCompiler = (code): Boolean => {
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
    return bracketCheck()
}
const typeCompiler = (code): Boolean => {
    const result = {
        variables: [],
        functions: [],
    }
    const variablesF = () => {
        const key = code.match(
            /(var|let|const) [a-z|0-9|\_]+(\:(\s?)[a-z|\[|\]]+.)?/gi
        )
        const type = code
            .match(/\:(\s)?[a-z|\[\]]+/gi)
            .map((v) => v.replace(/[\:|\s]/g, ''))
            .splice(0, key.length)
        const value = code
            .match(/\=(\s?)+.+/gi)
            .map((v) => v.replace(/\=/g, '').trimStart())
        const result = type.map((type, i) => {
            if (isNaN(+value[i])) {
                if (value[i].match(/true|false/)) return 'boolean'
                else if (value[i].match(/null/)) return 'null'
                else if (value[i].match(/undefined/)) return 'undefined'
                else if (
                    value[i].match(/[\{|\}|\:]/g) &&
                    value[i].match(/[\{|\}|\:]/g).length === 3
                ) {
                    return 'Object'
                } else if (
                    value[i].match(/[\[|\]]/g) &&
                    value[i].match(/[\[|\]]/g).length === 2
                ) {
                    if (value[i][0].match(/a-z/i)) return 'string[]'
                    else return 'number[]'
                } else return 'string'
            } else {
                return 'number'
            }
        })
        return type.every((v, i) => v === result[i])
    }
    return variablesF()
}
const generatorCompiler = (code) => code.replace(/\:(\s)?[a-z|\[\]]+/gi, '')

const taskAll = () => {
    if (!syntaxCompiler(code)) return
    else if (typeCompiler(code)) return
    else return generatorCompiler(code)
}
taskAll()
