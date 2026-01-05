import React from 'react'

function Game({ level }) {
    let totalCards
    switch(level) {
        case 'easy':
            totalCards = 12
            break
        case 'medium':
            totalCards = 18
            break
        case 'hard':
            totalCards = 24
            break
        default:
            totalCards = 12
            break;
    }

  return (
    <div>{totalCards}</div>
  )
}

export default Game