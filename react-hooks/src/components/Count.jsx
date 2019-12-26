import React, { useState } from 'react'

export const Count = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    )
}

export const UseStateExam = () => {
    const [age, setAge] = useState(42)
    const [fruit, setFruit] = useState('banana')
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }])

    return (
        <div>
            <p>
                age: {age}, fruit: {fruit}, todos: {todos[0].text}
            </p>
            <button onClick={() => setAge(20)}>setAge click</button>
            <button onClick={() => setFruit('apple')}>setFruit click</button>
            <button onClick={() => setTodos([{ text: 'modify todo!' }])}>
                setTodos click
            </button>
        </div>
    )
}

export default Count
