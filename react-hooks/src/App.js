import React from 'react'
import { Count, UseStateExam } from 'components/Count'
import { UseEffectExam } from 'components/UseEffectExam'
import { UseContextExam } from 'components/UseContextExam'
import UseReducerExam from 'components/UseReducerExam'

function App() {
    return (
        <div>
            App
            <Count />
            <UseStateExam />
            <UseEffectExam />
            <UseContextExam />
            <UseReducerExam />
        </div>
    )
}

export default App
