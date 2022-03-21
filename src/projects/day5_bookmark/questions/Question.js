import React,{useState} from 'react'

const Question = ({id,title,text}) => {
    const [showInfo, setshowInfo] = useState(false);

  return (
    <div className="single-question" >
        <header>
            <h3 className="q-title">{title}</h3>
            <button onClick={()=>setshowInfo(!showInfo)}>
                    <img src="./styles/images5/icon-arrow.svg" alt="arrow icon" />
            </button>
        </header>
        <p className="q-answer">{showInfo && text}</p>
    </div>
  )
}

export default Question