import React, { useState, useMemo, useCallback } from 'react'

const getAverage = numbers => {
    if (numbers.length === 0) return 0
    const sum = numbers.reduce((a, b) => a + b)
    return sum / numbers.length
}
const Average = () => {
    const [list, setList] = useState([])
    const [number, setNumber] = useState('')

    const onChange = useCallback(e => {
        setNumber(e.target.value)
    }, [])
    const onInsert = useCallback(
        e => {
            if (!number) return
            else if (!number.match(/[0-9]/)) {
                alert('숫자만 입력할 수 있습니다.')
                setNumber('')
                return
            }
            const nextList = list.concat(parseInt(number))
            setList(nextList)
            setNumber('')
        },
        [number, list]
    )
    const avg = useMemo(() => getAverage(list), [list])

    return (
        <div>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
        </div>
    )
}
export default Average
