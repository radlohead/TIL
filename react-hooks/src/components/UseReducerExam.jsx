import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1 }
        default:
            return state
    }
}
const UserReducerExam = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 })

    return (
        <div>
            <p>현재 카운터 값은 {state.value} 입니다.</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
    )
}

export default UserReducerExam
