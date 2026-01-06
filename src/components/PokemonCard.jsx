import React from 'react'

function PokemonCard({ pokemon }) {
  return (
    console.log(pokemon),
    <img src={pokemon.images.large} alt={pokemon.name} />
  )
}

export default PokemonCard