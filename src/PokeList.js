import React, { Component } from 'react';
import './PokeList.css';
import PokeCard from './PokeCard';
import { Link } from 'react-router-dom';

class PokeList extends Component {
  render() {
    const pokemonCard = this.props.pokemon.map((poke, i) => (
      <Link to={`/${poke.name}`} key={poke.id}>
        <PokeCard poke={poke.name} pokeID={poke.id} />
      </Link>
    ));

    return (
      <div className="list">
        {pokemonCard}
      </div>
    )
  };
};

export default PokeList;