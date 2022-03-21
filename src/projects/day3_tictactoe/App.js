import React,{useEffect} from 'react'

import Board from './Board'


const App = () => {

    useEffect(()=>{

        var link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./styles/tictactoe.css";
      
        document.head.appendChild(link);
        document.title = "GR | TiTacToe Game"

    }, [])



    const closeModal = ()=>{

    };
    /*
    .pasar useStates y winnerdiv a este archivo
    .Poder jugar llenado el tablero
    .Crear Modal para errores en vez del alert
    .A futuro: Log in de jugadores y contador de partidas ganadas.
    */

    


    return (
        <>
        <main>
            <h1 className="title">tic tac toe</h1>
            <Board></Board>
            
        </main>
        </>
    )
}

export default App
