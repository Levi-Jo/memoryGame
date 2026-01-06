import React, { useEffect } from 'react'
import styles from '../css/PokemonCard.module.css'
import { useState } from 'react'
function PokemonCard({ pokemon, history, setHistory, isFlipped, setIsFlipped }) {

    
    

  return (
    <>
    {isFlipped ? (
    <div className={styles.card+" "+styles.cardFlipped} onClick={() => setIsFlipped(!isFlipped)}>
        <img src={pokemon.image+"/high.png"} alt={pokemon.name} className={styles.cardImage} onClick={()=>{
            setHistory((Prevhistory) => [pokemon.id,...Prevhistory]);
            console.log(history);
        }}/>
        <div className={styles.back}>

        </div>
    </div>
    ) : (
    <div className={styles.cardNotFlipped+" "+styles.card} onClick={() => setIsFlipped(true)}>
        <img src={pokemon.image+"/high.png"} alt={pokemon.name} className={styles.cardImage} onClick={()=>{
            setHistory((Prevhistory) => [pokemon.id,...Prevhistory]);
            console.log(history);
        }}/>
        <div className={styles.back}>

        </div>
    </div>

    )}

    </>
  )
}

export default PokemonCard