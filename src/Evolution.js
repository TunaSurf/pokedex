import React, { Component } from 'react';
import './Evolution.css'

class Evolution extends Component {
  render() {
    let evolutionLocation = Object.assign({}, this.props.evolution);
    let evolution = [];
    let evolves = true;
    while (evolves) {
      if (evolutionLocation.evolution_details.length > 0) {
        evolution.push(
          {
            name: evolutionLocation.species.name,
            ...evolutionLocation.evolution_details[0]
          }
        )
      } else {
        evolution.push({ name: evolutionLocation.species.name });
      }
      if("0" in evolutionLocation.evolves_to) {
        evolutionLocation = Object.assign({}, evolutionLocation.evolves_to[0]);
      } else {
        evolves = false;
      }
    }
    console.log(evolution);

    return (
      <div>
        hello
      </div>
    )
  };
};

export default Evolution;