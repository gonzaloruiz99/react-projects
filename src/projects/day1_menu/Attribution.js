import React,{useState} from 'react'

const Attribution = () => {
  const [modal, setShowModal] = useState(true);


 const attribution = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "center",
  right: "30px",
  top: "30px",
  backgroundColor: "rgba(0,0,0,0.6)",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
}

const attributionP = {
  color: "aliceblue",
  fontSize: "0.7rem",
  textTransform: "capitalize",

}
const attributionA ={
  color: "rgba(255,255,255,0.6)",
  fontSize: "0.8rem",
  textTransform: "capitalize",

}
const attributionButton = {
  color: "aliceblue",
  position: "absolute",
  top: "10px",
  right: "0px",
  left: "0px",
  fontSize: "0.7rem",
}



  return (
    <>
    {modal && <div className="attribution" style={attribution}>
            <button style={attributionButton} onClick={() => setShowModal(false)} ><i class="fa-solid fa-x"></i></button>
            <p style={attributionP}> Challenge by </p >
            <a style={attributionA} href="https://www.johnsmilga.com/" target="_blank" rel='noreferrer'>John Smilga.</a>
            <p style={attributionP}> Coded by </p>
            <a style={attributionA} href="https://tak9191.github.io/portfolio_1.1/">Gonzalo Ruiz.</a>         
    </div>
  }
  </>
  )
}

export default Attribution