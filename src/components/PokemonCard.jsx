import React from 'react'
import styles from '../css/PokemonCard.module.css'
function PokemonCard({ pokemon }) {
  return (
    console.log(pokemon),
    <div className={styles.card}>
        <img src={pokemon.image+"/high.png"} alt={pokemon.name} className={styles.cardImage}/>

    </div>
  )
}

export default PokemonCard