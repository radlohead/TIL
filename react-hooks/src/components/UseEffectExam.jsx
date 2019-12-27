import React, { useState, useEffect } from 'react'

export const UseEffectExam = () => {
    const [count, setCount] = useState(0)

    // useEffect는 componentDidMount, componentDidUpdate와 비슷합니다
    useEffect(() => {
        if (count > 3) return // 조건문을 hooks 내부에 삽입할 수 있습니다.
        document.title = count
    })

    // 조건문 내부에서 hooks을 사용하면 사이드 이펙트가 발생할 수 있습니다.
    // hooks은 항상 최상위에 위치해야 합니다.
    // if(!count){
    //     useEffect(() => {
    //         document.title = count
    //     })
    // }

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}
