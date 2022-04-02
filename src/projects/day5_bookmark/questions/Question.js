import React,{useState} from 'react'

const Question = ({id,title,text}) => {
    const [showInfo, setshowInfo] = useState(false);


  if(!showInfo){
    var btnStyle  = {
      transform: "rotate(90deg)",
    }
  }

  return (
    <div className="single-question" onClick={()=>setshowInfo(!showInfo)}>
        <header>
            <h3 className="q-title">{title}</h3>
            <button onClick={()=>setshowInfo(!showInfo)} style={btnStyle}>
                    <img src="./styles/images5/icon-arrow.svg" alt="arrow icon" />
            </button>
        </header>
        <p className="q-answer">{showInfo && text}</p>
    </div>
  )
}

export default Question