import React from 'react'

import PokemonCard from './PokemonCard';
import { useState,useEffect } from 'react';
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
    const [pokemonCards, setPokemonCards] = useState("");
    useEffect(() => {
        async function fetchPokemon() {
            const apiKey = import.meta.env.VITE_API_KEY;
            const response = await fetch(`api/cards/xy1-1.json`,
            {headers: {
                'X-Api-Key': apiKey
                  }
        });
            const data = await response.json();
            console.log(data);
            setPokemonCards(data);
        }
        fetchPokemon();
    }, [totalCards]);

    return (
        <div>
            <p>Level: {level}</p>
            <p>Total Cards: {totalCards}</p>
            <div>
                    <PokemonCard pokemon={pokemonCards}/>
            </div>
        </div>

    )
}

export default Game