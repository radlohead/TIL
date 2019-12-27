import React, { useState, useEffect } from 'react'

export const UseEffectExam = () => {
    const [count, setCount] = useState(0)

    // useEffect는 componentDidMount, componentDidUpdate와 비슷합니다
    useEffect(() => {
        if (count > 3) return
        document.title = count
    })

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}
