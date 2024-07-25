import { useState } from "react"


export function ButtonResetGame (resetGame){
    
     return(
        <button onClick={resetGame}>
            Empezar de nuevo
        </button>
     )
}