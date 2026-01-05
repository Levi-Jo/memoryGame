import React from 'react'
import TCGdex from '@tcgdex/sdk'
function Game({ level }) {

    const tcgdex = new TCGdex('en');
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
    
    const cardFetch = async () => {
        const card = await tcgdex.card.get('swsh3-136');
        console.log(card);
    }
    cardFetch();

    return (
        <div>{totalCards}</div>
    )
}

export default Game