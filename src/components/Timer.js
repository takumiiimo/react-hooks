
import React, {useState, useEffect} from 'react'

const Timer = () => {
    const [count, setCount] = useState(0)
    const time = () => {
        // prevCountに対して+1する
        setCount(prevCount => prevCount+1)
    }

    useEffect(() => {
        //　１秒ごとにtime関数を実行
        const interval = setInterval(time, 1000)
        return () => {
            // Timerコンポーネントがインアクティベイトされた場合
            clearInterval(interval)
            console.log('cleared')
        }
    }, [])
    return (
        <div>
            {count}
        </div>
    )
}

export default Timer
