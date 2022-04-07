import React,{useState, } from 'react'


const picks = [
    {
        id:0,
        name:'rock',
        img:'./styles/images7/icon-rock.svg',
        borderColor:'--main-rock',
        shadowColor:'--shadow-rock',
    },
    {
        id:1,
        name:'paper',
        img:'./styles/images7/icon-paper.svg',
        borderColor:'--main-paper',
        shadowColor:'--shadow-paper',
    },
    {
        id:2,
        name:'scissors',
        img:'./styles/images7/icon-scissors.svg',
        borderColor:'--main-scissors',
        shadowColor:'--shadow-scissors',
    },
]


/*
.DONE arreglar logica ifs, para que cuente las victorias
.DONE agregar sistema de puntuacion
. Agregar un objeto a selections, que sea "you picked" y "the house picked" respectivamente
. Agregar IDs individuales
. Agregar css a la pagina secundaria.
. Opcional: hacer lagarto spock
. Opcional: Agregar un timer 3..2..1.. para la seleccion.
. Opcional: Agregar mayores puntajes a la memory del browser
. A futuro: Agregar sistema de log in y guardar puntuacion Maxima
. A futuro: Dar elegir numero de rondas (mejor de 5, de 3, de 10, etc.)

*/


const Logic = ({setCounter,counter}) => {
    const [screen, setScreen] = useState(true); // Conditions between both Returns
    const [selections, setSelections] = useState([]); // saves user and PC selection
    const [victory, setVictory] = useState(''); // Sets the match result (win, lose, tie)



    const playGame = (yourSelec, houseSelec) =>{

        setSelections([yourSelec,houseSelec]);


        const selecName = yourSelec.name;
        const houseName = houseSelec.name;


        if((selecName === 'rock' && houseName === 'scissors') ||
            (selecName === 'paper' && houseName === 'rock') ||
            (selecName === 'scissors' && houseName === 'paper')){
            setVictory('you win!');
            setScreen(false);
            setCounter(counter +10);
            return;
                
        }if(selecName === houseName){
            setVictory("It's a tie!");
            setScreen(false);
        }
        else{
            setVictory('you lose!');
            setScreen(false);
            if(counter > 0){
                setCounter(counter -10);
            }
        }
    }

    const randomPick = () =>{
        let randomNumber = Math.floor(Math.random() * picks.length);
        
        return picks[randomNumber];
    }


    


    if(screen){
        return (
            <section className="game-container">
                {picks.map((single,index)=>{
                    const {id,name, img, borderColor, shadowColor} = single;

                    return <article  key={id} className={`${name} selection`}>
                        <button onClick={()=>playGame(single, randomPick())}>
                            <img src={img} alt={name} style={{
                                border:`17px solid var(${borderColor})`,
                                boxShadow: `0px 6px 0px var(${shadowColor})`}} className="icon" />
                        </button>
                    </article>
                })}
            </section>
        )
    }





    return (
        <section className="main-container">
            
                <div className="picked selection">
                    <article  className="final-selection">
                        <h3>you picked</h3>
                        <img className="icon" style={{
                            border:`17px solid var(${selections[0].borderColor})`,
                            boxShadow: `0px 6px 0px var(${selections[0].shadowColor})`}} src={selections[0].img} alt={selections[0].name}/>
                    </article>
                    <article className="play-again">
                        <h1>{victory}</h1>
                        <button className="again-btn" onClick={()=> setScreen(true)}>play again</button>
                    </article>
                    <article  className="final-selection">
                        <h3>the House picked</h3>
                        <img className="icon" style={{
                            border:`17px solid var(${selections[1].borderColor})`,
                            boxShadow: `0px 6px 0px var(${selections[1].shadowColor})`}} src={selections[1].img} alt={selections[1].name}/>
                    </article>
                </div>
        </section>
    )
}

export default Logic
