import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModal, modalType}) => {

  useEffect(()=>{
    setTimeout(()=>{
      closeModal();
    },3000)
  })

  return <div className={`modal ${modalType}`}>
    <p>{modalContent}</p>
  </div>;
};

export default Modal;

