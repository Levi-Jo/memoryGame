import React from 'react'
import styles from '../css/Game.module.css'
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
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
        useEffect(() => {
        setLoading(true);
        let data
        const fetchPokemon = async () => {
            try {
            const apiKey = import.meta.env.VITE_API_KEY;
            const res = await fetch(`api`, {
                headers: { 'X-Api-Key': apiKey }
            });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            data = await res.json();
            } catch (err) {
            console.error('Error fetching Pokemon data:', err);
            } finally {
            setLoading(false);
            for(let i=0;i<totalCards;i++){
                let index = Math.floor(Math.random() * data.length);
                if(data[index].image){
                    setPokemonCards(Prev => [...Prev, data[index]]);
                }else{
                    i--;
                }
                
            }}
        };
        fetchPokemon();
        }, [totalCards]);

    console.log(loading);
    console.log(pokemonCards);

    return (
        <div>
            {loading ? (
                <p>Loading...</p> 
            ) : (
                <div className={styles.gameContainer}>
                    <p>Level: {level}</p>
                    <p>Total Cards: {totalCards}</p>
                    <div className={styles.cardGrid}>
                        {pokemonCards && pokemonCards.map((pokemon, index) => (
                            <PokemonCard history={history} setHistory={setHistory} key={index} pokemon={pokemon} className={styles.card}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Game