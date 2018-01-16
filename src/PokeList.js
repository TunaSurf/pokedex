import React, { Component } from 'react';
import './PokeList.css';
import PokeCard from './PokeCard';

class PokeList extends Component {
  render() {
    const pokemonCard = this.props.pokemon.map((poke, i) => (
      <PokeCard key={poke.id} poke={poke.name} pokeID={poke.id} />
    ));

    return (
      <div className="list">
        {pokemonCard}
      </div>
    )
  };
};

export default PokeList;