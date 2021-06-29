import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')
    useEffect(() => {
        console.log('useEffect invoked')
    }, [count])
    return (
        <>
            <buttton onClick={() => setCount(prevCount=>prevCount+1)}>Click {count}</buttton>
            <input type='text' value={item} onChange={evt => setItem(evt.target.value)}></input>

        </>
    )
}

export default BasicUseEffect
