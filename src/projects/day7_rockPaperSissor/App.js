import React,{useState, useEffect} from 'react'
import Attribution from './Attribution'

import Counter from './Counter'
import Logic from './Logic'
import Rules from './Rules'

/*
para reducer: 

REDUCERS:
. counter score
. cambio de modo
. contador de partidas jugadas previo a subir el puntaje.
. subir al local Storage los ultimos 5 puntajes mas altos del normal
. subir al local Storage los ultimos 5 puntajes mas altos del complejo
. Nombre del Log in

USESTATES o para useReducer:
. cambiar menu a play again
. Circulo que marca quien ganó, y color del texto de play again.
. Cambio de modo 5 a 3, y el cambio de las reglas aca.


IDEA posible: Si perdes 1 ves, restas 10, pero si perdes dos o mas seguidas, solo restas 5. Asi complejizar el puntaje final.
Y podes sumar por rachas. Racha de 3 victorias, suma 5p mas, y racha de 5, suma 15 puntos mas. Referenciando al mejor de 3 y mejor de 5.

*/


const App = () => {


    useEffect(()=>{
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./styles/rockpaper.css";
      
        document.head.appendChild(link);
        document.title = "RockPaperSissors | GR projects";


    }, [])

   
   
    const [counter, setCounter] = useState(0);

    
    const handleCounter = () => {
        
    }


    return (
        <>
        <div className="main-container">
            <div className="title">
                <h1 className="header"><span>rock</span><span>paper</span><span>scissors</span></h1>
                <Counter counter={counter}/>
            </div>
            <Logic setCounter={setCounter} counter={counter}/>
            <Rules/>
        </div>
        <Attribution></Attribution>   
        </>
    )
}

export default App
