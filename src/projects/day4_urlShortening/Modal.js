import React, { useEffect } from 'react';

const Modal = ({modalContent,setModalContent}) => {


  var modalStyle = {
    backgroundColor: modalContent.color,
    color: "#fff",
    padding: "8px 0",
    position: "absolute",
    top: "-1rem",
    left: "50%",
    borderRadius: "1rem",
    transform: "translateX(-50%)",
    display: "inline-block",
    textAlign: "center",
    width: "min(80vw,500px)",
    opacity: "60%",

  }

  useEffect(()=>{
    setTimeout(()=>{
           setModalContent({visible:false,text:"", color:""})
    },3000)
  })


  return <div className="modal" style={modalStyle}>
    <h5>{modalContent.text}</h5>
  </div>;
};

export default Modal;

