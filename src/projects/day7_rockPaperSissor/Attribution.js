import React,{useState} from 'react'

const Attribution = () => {
  const [modal, setShowModal] = useState(true);


    let attribution = {
  position: "absolute",
  backgroundColor: "transparent",
  bottom: "0",
  opacity: "80%",
  padding:  "10px 0",
  width: "100%",
  display: "flex",
  justifyContent: "center",
}



  return (
    <>
    {modal && <div className="attribution" style={{bottom: "20px"}}>
            <button onClick={() => setShowModal(false)} >x</button>
            <p style={{fontSize: "0.7rem"}}> Challenge by </p >
            <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor.</a>
            <p style={{fontSize: "0.7rem"}}> Coded by </p>
            <a href="#">Gonzalo Ruiz.</a>         
    </div>
  }
  </>
  )
}

export default Attribution