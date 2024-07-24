import './App.css'
import { Square } from './Components/Square.jsx'
import { TURNS } from './constants.js'
import { checkEndGame,checkWinner } from './logic/board.js'
import { WinnerModal } from './Components/WinnerModal.jsx'
import { useState } from 'react'
function App() {

  const [board,setBoard] = useState(Array(9).fill(null))
  const [turn,setTurn] = useState(TURNS.X)
  const [winner,setWinner] =useState(null) //null es no hay ganador true hay ganador y false hay empate

  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }
  const updateBoard = (index) => {
    if (board[index] ||winner) return
    //actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    //actualizo los turnos 
    const newTurn = turn=== TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar ganador
    const newWinner = checkWinner(newBoard)
    if(newWinner){
      setWinner(newWinner)
    }else if (checkEndGame(newBoard)){
      setWinner(false)//empate
    }
  }
  
  return (
    <>
    <main className='board'>  
      <h1>Tres en linea</h1>
      <section className='game'>
        {
          board.map((square, index)=> {
            return (
              <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner}/>
      </main>
    </>
  )
}

export default App
