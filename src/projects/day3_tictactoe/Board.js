import React,{useState} from 'react'
import Modal from './Modal';


const Board = () => {
    const [symbol, setSymbol] = useState("cross");
    const [cells, setCells] = useState(Array(9).fill(''));
    
    const [winner, setWinner] = useState();
    const [modal, setModal] = useState();

    

    const checkForWinner = (squares) => {

        const posibilities = {
            columns: [
                [0,3,6],
                [1,4,7],
                [2,5,8],
            ],
            rows: [
                [0,1,2],
                [3,4,5],
                [6,7,8],
            ],
            diagonals: [
                [0,4,8],
                [2,4,6],
            ],
        }


  

        for(let posibilitie in posibilities){
            posibilities[posibilitie].forEach((pattern)=>{
                if(
                    squares[pattern[0] === ''] ||
                    squares[pattern[1] === ''] ||
                    squares[pattern[2] === ''] 
                ){//nothing return
                }else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]] 
                ){
                    setWinner(squares[pattern[0]]);
                    
                }
            })
        }
             
        
    }

    const selectedSpace = (num) => {

        

        if(cells[num] !== ''){
            alert("already clicked");
            //post full board Logic here
            return
        }

        if(winner){
            alert("already a winner");
            return;
        }


        let squares = [...cells]; 
        if(symbol=== "cross"){
            squares[num] = 'cross'
            setSymbol("circle");
        }else{
            squares[num] = 'circle'
            setSymbol("cross");
        }
        checkForWinner(squares);
        setCells(squares);
    }

    const resetGame = () => {
        setCells(Array(9).fill(''));
        setWinner('');
    }

    const Cell = ({num}) => {
        return<td className="space" onClick={()=> selectedSpace(num)}>
            <div className="item">
                <span className={` ${cells[num]}`}></span>
            </div>
        </td>
    }


 

    return (
        <>
        <section className="main-container">
            <table>
                <tbody>
                    <tr>
                        <Cell num={0}></Cell>
                        <Cell num={1}></Cell>
                        <Cell num={2}></Cell>
                    </tr>
                    <tr>
                        <Cell num={3}></Cell>
                        <Cell num={4}></Cell>
                        <Cell num={5}></Cell>
                    </tr>
                    <tr>
                        <Cell num={6}></Cell>
                        <Cell num={7}></Cell>
                        <Cell num={8}></Cell>
                    </tr>
                </tbody>
            </table>
        </section>
            {/* {modal && 
            <Modal></Modal>
            } */}
            {winner &&
            <section className="winner-section">
                <h2>the winner is {winner}</h2>
                <button onClick={()=> resetGame()}>play again!</button>
            </section>
            }
        
        </>
    )
}

export default Board
