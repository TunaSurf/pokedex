import React, { Component } from 'react';
import './PokeCard.css';

class PokeCard extends Component {
  render() {
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.pokeID}.png`

    return (
      <div className="card waves-effect">
        <h6>{this.props.pokeID}</h6>
        <h5>{this.props.poke}</h5>
        <img src={image} alt={this.props.poke.name}/>
      </div>
    )
  };
};

export default PokeCard;