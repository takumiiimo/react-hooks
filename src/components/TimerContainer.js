import React, {useState} from 'react'
import Timer from './Timer'

function TimerContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Switch Timer</button>
            {/* displayがtrueだったらTimerコンポーネントがアクティベイトされる */}
            { display && <Timer /> }
        </div>
    )
}

export default TimerContainer
