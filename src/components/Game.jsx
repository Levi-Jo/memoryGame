import React from 'react'
import styles from '../css/Game.module.css'
import PokemonCard from './PokemonCard';
import { useState,useEffect } from 'react';
function Game({ level }) {

    const [pokemonCards, setPokemonCards] = useState("");
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFlipped, setIsFlipped] = useState(false);
    const [totalCards, setTotalCards] = useState(12);
 
    useEffect(() => {
        if(level === "Easy"){
            setTotalCards(12);
        }else if(level === "Medium"){
            setTotalCards(18);
        }else if(level === "Hard"){
            setTotalCards(24);
        }
    }, [level]);
    
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
                    if(i===0){
                        setPokemonCards([data[index]]);
                        
                    }else{
                        setPokemonCards(Prev => [...Prev, data[index]]);
                    }
                }else{
                    i--;
                }
                
            }}
        };
        fetchPokemon();
        }, [totalCards]);
        useEffect(() => {
            if(pokemonCards){
                setIsFlipped(false);
                setTimeout(() => {
                const shuffledCards = [...pokemonCards].sort(() => Math.random() - 0.5);
                setPokemonCards(shuffledCards);
                setIsFlipped(true);
                }, 1000);
                
            }
        }, [history]);
    return (
        <div>
            {loading ? (
                <img src="../src/assets/pokeball.png" alt="Loading..." className='Loading' />
            ) : (
                <div className={styles.gameContainer}>
                    <div>
                    <p>Level: {level}</p>
                    <p>Total Cards: {totalCards}</p>
                    </div>
                    
                    <p>Score: {history.length}</p>
                    <div className={styles.cardGrid}>
                        {pokemonCards && pokemonCards.map((pokemon, index) => (
                            <PokemonCard history={history} setHistory={setHistory} key={index} pokemon={pokemon} className={styles.card} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Game