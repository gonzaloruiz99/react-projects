import React,{useState} from 'react'

const Rules = () => {
    const [showRules, setShowRules] = useState(false)

    return (
        <>
        <button className='rules-btn' onClick={() => setShowRules(true)}>rules</button>
        { showRules &&
        <div className="rules-overlay">
            <div className="overlay"></div>
            
            <div className='rules'>
                <div className="rules-header">
                    <h1>Rules</h1>
                    <button>
                        <img src="./styles/images7/icon-close.svg" alt="x" onClick={() =>setShowRules(false)}/>
                    </button>
                </div>
                <img src="./styles/images7/image-rules.svg" alt="rules-img" />
            </div>
        </div>
        }
    </>
    )
}

export default Rules
