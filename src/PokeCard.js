import React, { Component } from 'react';
import './PokeCard.css';

class PokeCard extends Component {
  render() {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokeID}.png`

    return (
      <div className="card">
        <h3>{this.props.poke}</h3>
        <img src={image} alt={this.props.poke.name}/>
      </div>
    )
  };
};

export default PokeCard;