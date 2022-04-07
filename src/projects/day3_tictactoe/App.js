import React,{useEffect, useState} from 'react'

import Board from './Board'
import Modal from './Modal'

const App = () => {

    useEffect(()=>{ // dynamic css
        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./styles/tictactoe.css";
      
        document.head.appendChild(link);
        document.title = "TicTacToe Game | GR projects"
    }, [])


    const [modalContent, setModalContent] = useState( {visible:false,text:"", color:""} );
    

    /*
    A futuro: Log in de jugadores y contador de partidas ganadas.
    */

    


    return (
        <>
        <main>
            <h1 className="title">tic tac toe</h1>
            <div className="modal-container" style={{position:"relative"}}>
            {modalContent.visible && <Modal  modalContent={modalContent} setModalContent={setModalContent}></Modal>}
            </div>
            <Board setModalContent={setModalContent} ></Board>
            
        </main>
        </>
    )
}

export default App
