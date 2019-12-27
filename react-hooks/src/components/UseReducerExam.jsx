import React, { useReducer } from 'react'

const init = initialCount => {
    return { value: initialCount }
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }
        case 'DECREMENT':
            return { value: state.value - 1 }
        case 'RESET':
            return init(action.payload)
        default:
            return state
    }
}
const UserReducerExam = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 })

    return (
        <div>
            <p>현재 카운터 값은 {state.value} 입니다.</p>
            <button onClick={() => dispatch({ type: 'RESET', payload: 0 })}>
                reset
            </button>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        </div>
    )
}

export default UserReducerExam
