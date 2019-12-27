import React from 'react'
import { Count, UseStateExam } from 'components/Count'
import { UseEffectExam } from 'components/UseEffectExam'
import { UseContextExam } from 'components/UseContextExam'

function App() {
    return (
        <div>
            App
            <Count />
            <UseStateExam />
            <UseEffectExam />
            <UseContextExam />
        </div>
    )
}

export default App
