import React, { Component } from 'react';
import './Evolution.css';
import { Link } from 'react-router-dom';

class Evolution extends Component {
  handleEvolutionLink() {
    this.setState();
  }

  render() {
    let evolutionLocation = Object.assign({}, this.props.evolution);
    let evolution = [];
    let evolves = true;
    while (evolves) {
      if (evolutionLocation.evolution_details.length > 0) {
        evolution.push(
          {
            species: evolutionLocation.species,
            ...evolutionLocation.evolution_details[0]
          }
        )
      } else {
        evolution.push({ species: evolutionLocation.species });
      }
      if("0" in evolutionLocation.evolves_to) {
        evolutionLocation = Object.assign({}, evolutionLocation.evolves_to[0]);
      } else {
        evolves = false;
      }
    }
    console.log(evolution);

    let evolutionDisplay = evolution.map( e => {
      const name = e.species.name;
      const id = e.species.url.replace(/https:\/\/pokeapi.co\/api\/v2\/pokemon-species\//, '').slice(0, -1);
      const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
      let trigger = null;
      if('trigger' in e) {
        if(e.trigger.name === 'level-up' && e.min_level) {
          trigger = <p>Level {e.min_level}</p>;
        } else if (e.trigger.name === 'level-up' && e.min_happiness) {
          trigger = <p>Level up with happiness of {e.min_happiness}</p>;
        } else if (e.trigger.name === 'trade') {
          trigger = <p>Trade</p>;
        } else if (e.trigger.name === 'use-item') {
          trigger = <p>{e.item.name.replace(/-/, ' ')}</p>;
        }
      }
      return (
        <Link to={`/${name}`} key={id} onClick={this.handleEvolutionLink}>
                <div className="evolution-each">
                  <h6>{name}</h6>
                  <img src={image} alt={image}></img>
                  {trigger}
                </div>
              </Link>
      )
    });
    

    return (
      <div className="evolution">
        <h4>Evolution</h4>
        <div className="evolution-display">
          {evolutionDisplay}
        </div>
      </div>
    )
  };
};

export default Evolution;