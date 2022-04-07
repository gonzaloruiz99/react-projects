import React,{useState} from 'react'


const Board = ({setModalContent}) => {
    const [symbol, setSymbol] = useState("cross"); // toggles piece each round
    const [cells, setCells] = useState(Array(9).fill('')); // creates an empty array with 9 empty values
    
    const [winner, setWinner] = useState(); // defines winner and shows/hides winnerSection
    

    const checkForWinner = (squares) => {


        const posibilities = { //posible combination to win
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



        /*
        1. Iterates 8 times, 2 * 3 + 1 * 2 for each pattern inside each posibilitie
        2. If there isnt a pattern form, it returns
        3. If the squares pattern values are the same, there is the winner.
        4. Sets the square pattern value as a winner (cross or circle)
        */
        for(let posibilitie in posibilities){ 
            posibilities[posibilitie].forEach((pattern)=>{
                if(
                    squares[pattern[0] === ''] || // first value of each pattern ex: [0,3,6] -> 0
                    squares[pattern[1] === ''] ||
                    squares[pattern[2] === ''] 
                ){   return;//nothing 
                }else if (
                    squares[pattern[0]] === squares[pattern[1]] &&
                    squares[pattern[1]] === squares[pattern[2]] 
                ){
                    setWinner(squares[pattern[0]]);
                    
                }
            })
        }
             
        if(squares.includes("")){ //Checks for empty or full board
            //nothing
        }else if(!winner){
            setModalContent({visible:true,text:"it's a Tie!", color:"rgb(175, 139, 85)"})
            setWinner("Nobody :)");
        }
    }

    const selectedSpace = (num) => {

        // first checks for EndGame, tie or Cell already selected
        if(winner){
           setModalContent({visible:true,text:"already a winner!", color:"rgb(175, 139, 85)"})
            return;
        }
        if(cells[num] !== ''){
            setModalContent({visible:true,text:"already clicked!", color:"rgb(175, 85, 85)"})
            return;
        }


        
        // Sets the value of the empy array with an icon/piece, and changes the useState for the other piece
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

    const Cell = ({num}) => { // indiviudal <td> 
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
