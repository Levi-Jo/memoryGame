import React from 'react'
import styles from '../css/Game.module.css'
import PokemonCard from './PokemonCard';
import { useState,useEffect } from 'react';
function Game({ level }) {

    const [pokemonCards, setPokemonCards] = useState([]);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFlipped, setIsFlipped] = useState(true);
    let totalCards;
    switch(level){
        case "Easy":
            totalCards = 6;
            break;
        case "Medium":
            totalCards = 12;
            break;
        case "Hard":
            totalCards = 18;
            break;
        default:
            totalCards = 6;
    }
    
useEffect(() => {
  const controller = new AbortController();
  const signal = controller.signal;
  setLoading(true);

  const fetchPokemon = async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const res = await fetch('/api', {
        headers: { 'X-Api-Key': apiKey },
        signal,
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      if (!data || !Array.isArray(data)) throw new Error('No data');

      const cards = [];
      for (let i = 0; i < totalCards; i++) {
        const idx = Math.floor(Math.random() * data.length);
        const item = data[idx];
        if (item && item.image) cards.push(item);
        else i--;
      }

      if (!signal.aborted) {
        setPokemonCards(cards);
      }
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('Fetch aborted');
        return;
      }
      console.error('Error fetching Pokemon data:', err);
    } finally {
      if (!signal.aborted){
        switch(level){
            case "Easy":
                setTimeout(() => setLoading(false), 1000);
                break;
            case "Medium":
                setTimeout(() => setLoading(false), 1500);
                break;
            case "Hard":
                setTimeout(() => setLoading(false), 3000);
                break;
            default:
                setTimeout(() => setLoading(false), 4000);
        }
 
      } 
    }
  };

  fetchPokemon();
  return () => controller.abort();
}, [totalCards]); // include deps that should restart/cancel the fetch
        useEffect(() => {
            if(pokemonCards.length > 0){
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
                <img src="../src/assets/pokeball.png" alt="Loading..." className='Loading' style={{display: loading ? 'block' : 'none'}}/>
                <div className={styles.gameContainer} style={{display: loading ? 'none' : 'block'}}>
                    <div className={styles.gameInfo}>
                    <p>Level: {level}</p>
                    <p>Total Cards: {totalCards}</p>
                    </div>
                    <p>Score: {history.length}</p>
                    <div className={styles.cardGrid}>
                        {pokemonCards.length > 0 && pokemonCards.map((pokemon, index) => (
                            <PokemonCard history={history} setHistory={setHistory} key={index} pokemon={pokemon} isFlipped={isFlipped} setIsFlipped={setIsFlipped} totalCards={totalCards} />
                        ))}
                    </div>
                </div>
        </div>
    )
}

export default Game