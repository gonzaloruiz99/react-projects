import React from 'react'

const Counter = ({counter}) => {
    
    return (
        <div className="score-panel">
            <h3>score</h3>
            <h1>{counter}</h1>
        </div>
    )
}

export default Counter
 