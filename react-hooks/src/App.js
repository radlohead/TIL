import React from 'react'
import { Count, UseStateExam } from 'components/Count'
import { UseEffectExam } from 'components/UseEffectExam'
import { UseContextExam } from 'components/UseContextExam'
import UseReducerExam from 'components/UseReducerExam'
import UseMemoExam from 'components/UseMemoExam'

function App() {
    return (
        <div>
            App
            <Count />
            <UseStateExam />
            <UseEffectExam />
            <UseContextExam />
            <UseReducerExam />
            <UseMemoExam />
        </div>
    )
}

export default App
